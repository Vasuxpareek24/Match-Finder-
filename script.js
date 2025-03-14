const noGirlfriendList = ["Ramesh", "Vasu", "Vasudev", "Aarav", "Chitu", "Bablu", "Pappu"]; // 😂 जिनकी GF नहीं मिलेगी

const fixedMatches = {
    "Hemant": "Ishika ❤️",
    "Hanent": "Ishika ❤️",
    "Vikram": "Neha ❤️",
    "Sahil": "Simran ❤️",
    "Amit": "Sakshi ❤️",
    "Manish": "Isha ❤️",
    "Rajesh": "Riya ❤️",
    "Suresh": "Pooja ❤️"
};

// ✅ 100 Indian Names List
const indianNames = {
    male: ["Hemant", "Vasu", "Mohit", "Nitesh", "Pradeep", "Abhishek", "Rajesh", "Deepak", "Arjun", "Rahul", "Harsh", "Sumit",
           "Nikhil", "Kunal", "Yash", "Kabir", "Abhinav", "Pranav", "Tanmay", "Varun", "Tushar", "Vivek", "Shivam", "Kartik"],
    female: ["Ananya", "Priya", "Neha", "Simran", "Sakshi", "Isha", "Riya", "Pooja", "Kajal", "Nidhi", "Sanya", "Swati", 
             "Tanya", "Vidhi", "Monika", "Avni", "Charu", "Roshani", "Ekta", "Gauri", "Hina", "Ishita", "Juhi", "Kavya"]
};

// ✅ Find Match Function
function findMatch() {
    let gender = document.getElementById("gender").value;
    let playerName = document.getElementById("player-name").value.trim();

    if (playerName === "") {
        alert("Please enter your name!");
        return;
    }

    let funnyMessages = [
        "Destiny has found your match!",
        "Love is in the air! 😍",
        "Perfect match detected! 💖",
        "Oops! You got lucky 😉",
        "This is your soulmate! 💞"
    ];

    let resultText;
    
    // ✅ अगर No GF List में नाम है
    if (noGirlfriendList.includes(playerName)) {
        resultText = `💔 Sorry ${playerName}, No Girlfriend Found for You! 😢`;
    } else {
        let randomName;

        // ✅ Fixed Matches Pehle Check Karo
        if (fixedMatches[playerName]) {
            randomName = fixedMatches[playerName];  
        } else {
            // ✅ Agar Fixed Match Nahi Mila, to Random Name Select Karo
            randomName = gender === "boy"
                ? indianNames.female[Math.floor(Math.random() * indianNames.female.length)] + " ❤️"
                : indianNames.male[Math.floor(Math.random() * indianNames.male.length)] + " ❤️";
        }

        let randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
        resultText = `🎉 ${playerName}, Your ${gender === "boy" ? "Girlfriend" : "Boyfriend"} is <strong>${randomName}</strong> ❤️<br><small>${randomMessage}</small>`;
    }

    document.getElementById("result").innerHTML = resultText;
}
