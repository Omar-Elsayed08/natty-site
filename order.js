document.addEventListener("DOMContentLoaded", function () {
    // Simulate order progress
    simulateOrderProgress();
  });
  
  function simulateOrderProgress() {
    const progressBar = document.getElementById("progressbar-2");
  
    // Simulate order processing
    setTimeout(() => {
      updateProgressBar(progressBar, 1);
    }, 1000);
  
    // Simulate order shipping
    setTimeout(() => {
      updateProgressBar(progressBar, 2);
    }, 2000);
  
    // Simulate order en route
    setTimeout(() => {
      updateProgressBar(progressBar, 3);
    }, 3000);
  
    // Simulate order arrival
    setTimeout(() => {
      updateProgressBar(progressBar, 4);
    }, 4000);
  }
  
  function updateProgressBar(progressBar, step) {
    const steps = progressBar.children;
  
    for (let i = 0; i < steps.length; i++) {
      if (i < step) {
        steps[i].classList.add("active");
        steps[i].classList.remove("text-muted");
      } else {
        steps[i].classList.remove("active");
        steps[i].classList.add("text-muted");
      }
    }
  }
  document.addEventListener("DOMContentLoaded", function () {
    // Simulate order progress every hour
    setInterval(simulateOrderProgress, 3600000); // 1 hour in milliseconds
  });
  
  function simulateOrderProgress() {
    const progressBar = document.getElementById("progressbar-2");
  
    // Simulate order processing
    setTimeout(() => {
      updateProgressBar(progressBar, 1);
      updateExpectedArrivalDate();
    }, 1000);
  
    // Simulate order shipping
    setTimeout(() => {
      updateProgressBar(progressBar, 2);
    }, 2000);
  
    // Simulate order en route
    setTimeout(() => {
      updateProgressBar(progressBar, 3);
    }, 3000);
  
    // Simulate order arrival
    setTimeout(() => {
      updateProgressBar(progressBar, 4);
    }, 4000);
  }
  
  function updateProgressBar(progressBar, step) {
    const steps = progressBar.children;
  
    for (let i = 0; i < steps.length; i++) {
      if (i < step) {
        steps[i].classList.add("active");
        steps[i].classList.remove("text-muted");
      } else {
        steps[i].classList.remove("active");
        steps[i].classList.add("text-muted");
      }
    }
  }
  
  function updateExpectedArrivalDate() {
    const expectedArrivalDateElement = document.querySelector(
      ".text-end > p:nth-child(1) > span"
    );
  
    // Update expected arrival date (e.g., add one day)
    const currentDate = new Date(expectedArrivalDateElement.textContent);
    currentDate.setDate(currentDate.getDate() + 1);
  
    // Format the date to "MM/DD/YY"
    const formattedDate = currentDate.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "2-digit",
    });
  
    expectedArrivalDateElement.textContent = formattedDate;
  }
  document.addEventListener("DOMContentLoaded", function () {
    // Simulate order progress every 2 hours (7200000 milliseconds)
    setInterval(simulateOrderProgress, 7200000);
  });
  
  function simulateOrderProgress() {
    const progressBar = document.getElementById("progressbar-2");
  
    // Simulate order processing
    setTimeout(() => {
      updateProgressBar(progressBar, 1);
      updateExpectedArrivalDate();
    }, 3000);
  
    // Simulate order shipping
    setTimeout(() => {
      updateProgressBar(progressBar, 2);
    }, 6000);
  
    // Simulate order en route
    setTimeout(() => {
      updateProgressBar(progressBar, 3);
    }, 9000);
  
    // Simulate order arrival
    setTimeout(() => {
      updateProgressBar(progressBar, 4);
    }, 12000);
  }
  
  function updateProgressBar(progressBar, step) {
    const steps = progressBar.children;
  
    for (let i = 0; i < steps.length; i++) {
      if (i < step) {
        steps[i].classList.add("active");
        steps[i].classList.remove("text-muted");
      } else {
        steps[i].classList.remove("active");
        steps[i].classList.add("text-muted");
      }
    }
  }
  
  function updateExpectedArrivalDate() {
    const expectedArrivalDateElement = document.querySelector(
      ".text-end > p:nth-child(1) > span"
    );
  
    // Update expected arrival date (e.g., add one day)
    const currentDate = new Date(expectedArrivalDateElement.textContent);
    currentDate.setDate(currentDate.getDate() + 1);
  
    // Format the date to "MM/DD/YY"
    const formattedDate = currentDate.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "2-digit",
    });
  
    expectedArrivalDateElement.textContent = formattedDate;
  }
  