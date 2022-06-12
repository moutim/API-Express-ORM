const permissoes = (sequelize, DataTypes) => {
  const tabelaPermissoes = sequelize.define("Permissoes", {
    nivel: DataTypes.STRING,
  }, { timestamps: false });

  tabelaPermissoes.associate = (models) => {
    tabelaPermissoes.hasOne(models.Usuarios, {
      foreignKey: 'permissaoId', as: 'usuario'
    });
  };

  return tabelaPermissoes;
}

module.exports = permissoes;