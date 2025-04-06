const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

// Registrar um novo usuário
const register = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Verifica se o usuário já existe
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
            return res.status(400).json({ message: 'Usuário já existe' });
        }

        // Cria o usuário
        const user = await User.create({ username, password });
        res.status(201).json({ message: 'Usuário registrado com sucesso', user });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao registrar usuário', error });
    }
};

// Login de usuário
const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Verifica se o usuário existe
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(400).json({ message: 'Usuário não encontrado' });
        }

        // Verifica a senha
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Senha inválida' });
        }

        // Gera o token JWT
        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });

        res.json({ message: 'Login bem-sucedido', token });
    } catch (error) {
        console.error('Erro no login:', error); // Log do erro no terminal
        res.status(500).json({ message: 'Erro ao fazer login', error: error.message });
    }
};


module.exports = { register, login }