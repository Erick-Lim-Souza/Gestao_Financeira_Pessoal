document.addEventListener("DOMContentLoaded", () => {
  const balanceAmount = document.querySelector(".balance-amount");
  const transactionList = document.getElementById("transaction-list");
  const form = document.getElementById("transaction-form");
  const categoryChartCtx = document.getElementById("categoryChart").getContext("2d");

  let transactions = JSON.parse(localStorage.getItem("db_transactions")) || [];

  const categoryData = {
    labels: ["Moradia", "Alimentação", "Transporte", "Lazer"],
    datasets: [
      {
        label: "Gastos por Categoria",
        data: [0, 0, 0, 0],
        backgroundColor: ["#8b5cf6", "#f59e0b", "#10b981", "#ef4444"],
      },
    ],
  };

  const categoryChart = new Chart(categoryChartCtx, {
    type: "doughnut",
    data: categoryData,
    options: {
      responsive: true,
    },
  });

  function updateCategoryData() {
    const categories = ["Moradia", "Alimentação", "Transporte", "Lazer"];
    const categoryTotals = categories.map((category) => {
      return transactions
        .filter((t) => t.type === "expense" && t.category === category)
        .reduce((acc, cur) => acc + parseFloat(cur.amount), 0);
    });
    categoryChart.data.datasets[0].data = categoryTotals;
    categoryChart.update();
  }

  function updateBalance() {
    const income = transactions
      .filter((t) => t.type === "income")
      .reduce((acc, cur) => acc + parseFloat(cur.amount), 0);

    const expense = transactions
      .filter((t) => t.type === "expense")
      .reduce((acc, cur) => acc + parseFloat(cur.amount), 0);

    balanceAmount.textContent = `R$ ${(income - expense).toFixed(2)}`;
  }

  function renderTransactions() {
    transactionList.innerHTML = "";
    transactions.forEach((transaction) => {
      const li = document.createElement("li");
      li.className = transaction.type;
      li.innerHTML = `
        <strong>${transaction.description}</strong>
        <span>R$ ${parseFloat(transaction.amount).toFixed(2)}</span>
        <span>Categoria: ${transaction.category}</span>
        <span>Data: ${transaction.date}</span>
      `;
      transactionList.appendChild(li);
    });
    updateBalance();
    updateCategoryData();
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const description = document.getElementById("description").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const type = document.getElementById("type").value;
    const category = document.getElementById("category").value;
    const date = document.getElementById("registrationDate").value;

    if (!description || !amount || !type || !category || !date) {
      return alert("Preencha todos os campos!");
    }

    transactions.push({
      description,
      amount,
      type,
      category,
      date,
    });

    localStorage.setItem("db_transactions", JSON.stringify(transactions));
    renderTransactions();
    form.reset();
  });

  renderTransactions();
});
