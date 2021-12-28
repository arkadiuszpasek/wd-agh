export interface User {
  id: string;
  name: string;
  lastName: string;
  avatarUrl: string;
  email: string;
  phone: string;
  address: string;
  bornTime: string;
  bornPlace: string;
  motherName: string;
  fatherName: string;
  pesel: string;
  nationalId: string;
  accountNumber?: string;
}

export const TheUser: User = {
  id: "306325",
  name: "Arkadiusz",
  lastName: "Pasek",
  avatarUrl:
    "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=200&q=80",
  phone: "997 997 997",
  email: "arpasek@student.agh.edu.pl",
  address: "ul. Czarnowiejska 342, 32-020 Wieliczka, Polska",
  bornPlace: "Kraków",
  bornTime: "10.08.1999",
  motherName: "Lauren",
  fatherName: "Tom",
  pesel: "90431922313",
  nationalId: "CGI 33523",
};
