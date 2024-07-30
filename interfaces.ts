interface User {
  readonly dbID: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrail: () => string;
  getCoupon(coupnname: string, value: number): number;
}

interface User {
  githubToken: string;
}

const hitesh: User = {
  dbID: 10,
  email: "",
  userId: 10,
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "naivas", num: 10) => {
    return 10;
  },
  githubToken: "153664",
};

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const hiteshAmin: Admin = {
  dbID: 10,
  email: "",
  userId: 10,
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "naivas", num: 10) => {
    return 10;
  },
  githubToken: "153664",
  role: "admin",
};
