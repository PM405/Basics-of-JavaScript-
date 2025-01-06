document.getElementById('displayButton').addEventListener('click', function () {
    const data = {
      UserId: 568694,
      title: "Assigment",
      body: "This is example .",
      id:"23BTCSE027",
    };
  
    document.getElementById('userId').textContent = data.UserId;
    document.getElementById('title').textContent = data.title;
    document.getElementById('body').textContent = data.body;
    document.getElementById('ID').textContent = data.id;
  });
  