import style from './TransactionHistory.module.css';

const TransactionHistory = ({transactions}) => {
    return (
        <table className={style.table}>
            <thead>
                <tr className={style.header}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map(({ id, type, amount, currency }) => (
                    <tr key={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TransactionHistory;