document.addEventListener('DOMContentLoaded', () => {
    // ข้อมูลแต้มของนักเรียน (คุณต้องมาแก้ไขค่าตรงนี้เอง)
    let students = [
        { name: 'นักเรียน A', score: 150 },
        { name: 'นักเรียน B', score: 120 },
        { name: 'นักเรียน C', score: 200 },
        { name: 'นักเรียน D', score: 90 }
    ];

    // แสดงผลแต้ม
    const scoreTableBody = document.querySelector('#score-table tbody');
    students.forEach(student => {
        const row = scoreTableBody.insertRow();
        const nameCell = row.insertCell();
        const scoreCell = row.insertCell();
        nameCell.textContent = student.name;
        scoreCell.textContent = student.score;
    });

    // แสดงผล Leaderboard
    const leaderboardList = document.getElementById('leaderboard-list');
    // เรียงลำดับนักเรียนตามแต้มสูงสุด
    const sortedStudents = [...students].sort((a, b) => b.score - a.score);

    sortedStudents.forEach(student => {
        const listItem = document.createElement('li');
        listItem.textContent = `${student.name}: ${student.score} แต้ม`;
        leaderboardList.appendChild(listItem);
    });

    // สำหรับ Progression Bar คุณต้องอัปเดต style="width: XX%;" ใน HTML เอง
    // หรือเขียน JavaScript ที่ซับซ้อนขึ้นเพื่อดึงข้อมูลจาก Array
    // ตัวอย่างเช่น:
    // const studentProgressData = [
    //     { name: 'นักเรียน A', completedLessons: 3, totalLessons: 4 },
    //     { name: 'นักเรียน B', completedLessons: 2, totalLessons: 4 }
    // ];
    // function updateProgressBar(studentName, completed, total) {
    //     const percentage = (completed / total) * 100;
    //     const progressBar = document.querySelector(`.student-progress h3:contains("${studentName}") + .progress-bar-container .progress-bar`);
    //     if (progressBar) {
    //         progressBar.style.width = `${percentage}%`;
    //     }
    // }
    // updateProgressBar('นักเรียน A', 3, 4); // เรียกใช้เมื่อต้องการอัปเดต
});
