const API_URL = "http://127.0.0.1:8000";

const connectBtn = document.getElementById("connectBtn");
const result = document.getElementById("result");

connectBtn.addEventListener("click", async () => {
  result.textContent = "Connecting to backend...";
  result.className = "result";
  connectBtn.disabled = true;

  try {
    const response = await fetch(`${API_URL}/`);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    // use data.message OR data.msg - make sure same as backend
    result.textContent = data.message || data.msg;
    result.classList.add("success");
  } catch (error) {
    result.textContent = "Connection failed. Check whether FastAPI is running.";
    result.classList.add("error");
    console.error("Backend connection error:", error);
  } finally {
    connectBtn.disabled = false;
  }
});

// Fetch Student Details
const studentBtn = document.getElementById("studentBtn");
const studentResult = document.getElementById("studentResult");

studentBtn.addEventListener("click", async () => {
  studentResult.textContent = "Fetching student details...";
  studentResult.className = "result";

  try { // <-- yahi par tumhara 'trv' tha
    const response = await fetch(`${API_URL}/student`);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    studentResult.textContent = JSON.stringify(data);
    studentResult.classList.add("success");
  } catch (error) {
    studentResult.textContent = "Failed to fetch student details";
    studentResult.classList.add("error");
    console.error(error);
  }
});