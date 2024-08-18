import "./Tables.css";

const Tables = ({ incomes }) => {

    const averageIncomes = () => {
        return ((incomes.reduce((ac , currentIncome) => ac + currentIncome.income , 0) / incomes.length).toFixed(2))
    }


    return (
        <>
            <div className="table-container">
                <table className="table-brands">
                    <thead>
                        <tr>
                            <th>Marca</th>
                            <th>Ingresos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {incomes.map((income) => (
                            <tr>
                                <td>{income.brand}</td>
                                <td>${income.income}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="average-container">
                <p>Promedio de Ingresos netos de las empresas:</p>
                <p>${averageIncomes()}</p>
            </div>
        </>
    );
};

export default Tables;
