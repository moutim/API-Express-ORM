const permissoes = (sequelize, DataTypes) => {
  const tabelaPermissoes = sequelize.define("Permissoes", {
    nivel: DataTypes.STRING,
  }, { timestamps: false });

  tabelaPermissoes.associate = (models) => {
    tabelaPermissoes.hasOne('Usuarios', {
      foreignKey: 'permissao', as: 'permissao'
    });
  };

  return tabelaPermissoes;
}

module.exports = permissoes;