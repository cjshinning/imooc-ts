enum Status {
  OFFLINE,
  ONLINE,
  DELETED
}

// console.log(Status[0]);

// console.log(Status.OFFLINE);
// console.log(Status.ONLINE);
// console.log(Status.DELETED);

// const Status = {
//   OFFLINE: 0,
//   ONLINE: 1,
//   DELETED: 2
// };

function getResult(status) {
  if (status === Status.OFFLINE) {
    return 'offline';
  } else if (status === Status.ONLINE) {
    return 'online';
  } else if (status === Status.DELETED) {
    return 'deleted';
  }
  return 'error';
}

const result = getResult(1);
console.log(result);
