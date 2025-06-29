export interface User {
  Id: number;
  Name: string;
  Total_time: number;
}

export interface UserResponse {
  Id: string;
  EmployeeName: string;
  StarTimeUtc: string;
  EndTimeUtc: string;
  EntryNotes: string;
  DeletedOn: string | null;
}