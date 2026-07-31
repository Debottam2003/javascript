let input=  require('prompt-sync')();
const todo = [];

function main() {
    console.log("<<< TODO LIST >>>");
    while (true) {
        console.log("\n......(1.➕ ADD 2.➖ REMOVE 3.CHECK LIST 4.Exit)......");
        const option = input("Choose an option: ")?.trim();
        switch (option) {
            case '1':
                const task = input("Enter the Task: ")?.trim();
                if (task === "") {
                    console.log("❗ Task cannot be empty.");
                } else {
                    todo.push(task);
                    console.log("✅ Task added successfully!");
                }
                break;

            case '2':
                if (todo.length === 0) {
                    console.log("🫙 Your To-Do list is empty!");
                    break;
                }

                console.log("📋 Your To-Do List:");
                todo.forEach((task, i) => console.log(`${i + 1}. ⭐ ${task}`));

                const removeIdx = input("Enter the task number to remove: ")?.trim();
                const idx = parseInt(removeIdx, 10);

                if (isNaN(idx) || idx < 1 || idx > todo.length) {
                    console.log("❌ Invalid task number!");
                } else {
                    todo.splice(idx - 1, 1);
                    console.log("🗑️ Task removed successfully!");
                }
                break;

            case '3':
                console.log("📋 Your To-Do List:");
                if (todo.length === 0) {
                    console.log("🫙 (Empty)");
                } else {
                    todo.forEach((task, i) => console.log(`${i + 1}. ⭐ ${task}`));
                }
                break;

            case '4':
                console.log("👋 Exiting... Bye!");
                process.exit(0);

            default:
                console.log("❌...Wrong Option...TRY AGAIN");
        }
    }
}

main();
