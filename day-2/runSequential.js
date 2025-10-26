async function runSequential(tasks) {
  const results = [];
  for (let i = 0; i < tasks.length; i++) {
    const result = await tasks[i]();
    results.push(result);
  }
  return results;
}


function task1() {
  return Promise.resolve("Task 1 done");
}

function task2() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve("Task 2 done after 1 second");
    }, 1000);
  });
}

function task3() {
  return Promise.resolve("Task 3 done");
}



var tasks = [task1, task2, task3];


runSequential(tasks).then(function(results) {
  console.log(results);
});