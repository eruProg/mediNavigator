function submitForm() {
      const name = document.getElementById("name").value.trim();
      const age = document.getElementById("age").value.trim();
      const sex = document.getElementById("sex").value.trim();
      const location = document.getElementById("location").value.trim();
      const phone = document.getElementById("phone").value.trim();

      if (!name || !age || !sex || !location || !phone) {
        alert("Please fill in all fields!");
        return;
      }

      document.getElementById("inputPanel").classList.add("hidden");
      document.getElementById("hospitalPanel").classList.remove("hidden");
    }

    function goBack() {
      document.getElementById("inputPanel").classList.remove("hidden");
      document.getElementById("hospitalPanel").classList.add("hidden");
      document.getElementById("hospitalInfo").classList.add("hidden");
      document.getElementById("hospitalInfo").innerHTML = "";

      document.getElementById("name").value = "";
      document.getElementById("age").value = "";
      document.getElementById("sex").value = "";
      document.getElementById("location").value = "";
      document.getElementById("phone").value = "";

      document.getElementById("hospitalDropdown").selectedIndex = 0;
    }

    function showHospitalInfo() {
      const selection = document.getElementById("hospitalDropdown").value;
      const infoDiv = document.getElementById("hospitalInfo");
      let info = "";

      if (selection === "taytay") {
        info = `
          <h3>Taytay Doctors Multispecialty Hospital</h3>
          <ul style="text-align:left;">
            <li><strong>Classification:</strong> Secondary</li>
            <li><strong>Bed Capacity:</strong> 25</li>
            <li><strong>Rooms Available:</strong> 11</li>
            <li><strong>Equipment:</strong> CT scan, X-ray, Ultrasound, ECG, Dialysis Machine</li>
            <li><strong>Services:</strong> 24/7 Pharmacy, Emergency Room, Operating Room, NICU, Hemodialysis, Telemedicine</li>
          </ul>
        `;
      } else {
        info = `
          <h3>Rizal Provincial Hospital System Taytay</h3>
          <ul style="text-align:left;">
            <li><strong>Classification:</strong> Primary</li>
            <li><strong>Bed Capacity:</strong> 11</li>
            <li><strong>Rooms Available:</strong> 5</li>
            <li><strong>Equipment:</strong> MRI, CT scan, Digital X-ray, Laboratory Analyzers</li>
            <li><strong>Services:</strong> Surgery, Obstetrics-Gynecology, Internal Medicine, Pediatrics, Dental, Hemodialysis</li>
          </ul>
        `;
      }

      infoDiv.innerHTML = info;
      infoDiv.classList.remove("hidden");
    }