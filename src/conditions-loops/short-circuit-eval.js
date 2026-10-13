// skips the next value depending on the boolean operator

function expensiveCall() {
  console.log("This is an expensive operation");
  return false;
}

let x = true;

const result = x && expensiveCall();
console.log(result);

// null coalescing
// auto select the next value if the other one is null

const config = {
  timeout: 0,
  debug: null
};

const timeout = config.debug ?? 200;

console.log(timeout);

// optional chaining
// traverses the chain depending on the value
//

const user = {
  profile: {
    settings: {
      theme: "dark"
    }
  },
  notify() {
    console.log("yo!");
  }
};

const user1 = {
  name: {
    firstName: "Miguel"
  }
};

console.log(user?.profile?.settings?.theme);
console.log(user1?.name);
user?.notify?.();
user?.greet?.();