const checkRole = (requiredRole) => {
    return (req, res, next) => {
        // Ambil role dari header
        const userRole = req.headers['x-user-role'];

        if (!userRole) {
            return res.status(401).json({ message: "Akses ditolak: Role tidak ditemukan di header" });
        }

        if (userRole !== requiredRole) {
            return res.status(403).json({ message: "Akses ditolak: Anda tidak memiliki izin" });
        }

        next();
    };
};

module.exports = checkRole;