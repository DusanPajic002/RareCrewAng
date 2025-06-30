import { Component } from '@angular/core';
import { AuthService } from 'src/app/servers/auth.service';
import { User, UserResponse } from '../types/allTypes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  users: User[] = [];
  loading: boolean = false;

  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    this.loading = true;
    this.authService.getUsers().subscribe((data) => {
      try {
        const resp = data as UserResponse[];
        if (resp == null || resp.length == 0)
          throw new Error("No data received from server");
        this.addUsers(resp); 
      } catch (error) {
        console.error("Error processing data:", error);
        alert("An error occurred while processing data. Please try again later.");
        return;
      } finally {
        this.loading = false;
      }
      
    });
  }

  addUsers(resp: UserResponse[]) {
    const userMap = resp.reduce((acc, curr) => {
      if (!curr.EmployeeName) return acc;

      const time = this.getHoursDiff(curr.StarTimeUtc, curr.EndTimeUtc);
      if (acc[curr.EmployeeName]) {
        acc[curr.EmployeeName].Total_time += time;
      } else {
        acc[curr.EmployeeName] = {
          Id: 0,
          Name: curr.EmployeeName,
          Total_time: time
        };
      }

      return acc;
    }, {} as Record<string, User>);

    this.users = Object.values(userMap).sort((a, b) => b.Total_time - a.Total_time);
  }

  getHoursDiff(startTimeUtc: string, endTimeUtc: string) {
    const startDate = new Date(startTimeUtc);
    const endDate = new Date(endTimeUtc);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime()))
      return 0;

    const diffMS = endDate.getTime() - startDate.getTime();
    const diffH = diffMS / (1000 * 60 * 60);

    return diffH;
  }


}
