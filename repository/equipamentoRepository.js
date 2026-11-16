import conexao from "../config/conexao"
export async function criarEquipamento(equipamento) {
    const sql = "insert into calibracao(codigoPatrimonio, nome, setor, status) values (?,?,?,?)"
        const [resultado] = await conexao.execute(sql, [
            calibracao.codigoPatrimonio,
            calibracao.nome,
            calibracao.setor,
            calibracao.status
        ]);

     
        return resultado.insertId;
    
}

export async function listarEquipamentos() {
    const sql = "select * from equipamentos order by id_equipamento"
        const [linhas] = await conexao.execute(sql);
    
        return linhas;

}

export async function buscarEquipamentoPorId(id) {
     const sql = "select * from equipamentos where id = ?"
        const [linhas] = await conexao.execute(sql,[id])
    
        return linhas[0];
}

export async function atualizarEquipamento(id, equipamento) {
    const sql = "update calibracoes set(codigoPatrimonio = ?, nome = ?, setor = ?, status = ?) where id = ?"
        const resultado = await conexao.execute(sql , [id] [
            equipamento.equipamentoId,
            equipamento.dataCalibracao,
            equipamento.resultado,
            equipamento.responsavel
    
        ]);
        return resultado.affedrows

}

export async function excluirEquipamento(id) {
    const sql =  "delete from equipamentos where Id = ?"
        const [resultado] = await conexao.execute (sql , [id])
    
        return resultado.affectedrows;
    }
