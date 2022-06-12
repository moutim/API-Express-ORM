const usuarios = (sequelize, DataTypes) => {
  const tabelaUsuarios = sequelize.define("Usuarios", {
    usuario: DataTypes.STRING,
    senha: DataTypes.STRING,
  }, { timestamps: false });

  tabelaUsuarios.associate = (models) => {
    tabelaUsuarios.belongsTo(models.Permissoes, {
      foreignKey: 'permissaoId', as: 'permissao'
    });
  };

  return tabelaUsuarios;
}

module.exports = usuarios;