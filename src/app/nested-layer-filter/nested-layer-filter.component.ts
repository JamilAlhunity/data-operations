import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-nested-layer-filter',
  templateUrl: './nested-layer-filter.component.html',
  styleUrls: ['./nested-layer-filter.component.css']
})
export class NestedLayerFilterComponent implements OnInit {
  users: any = [
    {
      "createDate": null,
      "id": 294,
      "surveyID": 31989,
      "roleID": null,
      "roleDescEn": "CEO",
      "roleDescAr": "المدير",
      "roleColor": "#111111",
      "children": [
        {
          "createDate": null,
          "id": 781,
          "surveyID": 31989,
          "roleID": 294,
          "roleDescEn": "Web Devs",
          "roleDescAr": "مبرمج",
          "roleColor": "#ab1717",
          "children": [
            {
              "createDate": null,
              "id": 782,
              "surveyID": 31989,
              "roleID": 781,
              "roleDescEn": "Trainee",
              "roleDescAr": "12312",
              "roleColor": null,
              "children": []
            }
          ]
        },
        {
          "createDate": null,
          "id": 317,
          "surveyID": 31989,
          "roleID": 294,
          "roleDescEn": "Supervisor",
          "roleDescAr": "مراقب",
          "roleColor": "#09dcce",
          "children": [{
            "createDate": null,
            "id": 305,
            "surveyID": 31989,
            "roleID": 294,
            "roleDescEn": "QA",
            "roleDescAr": "كيو ايه",
            "roleColor": "#c28b14",
            "children": [
              {
                "createDate": null,
                "id": 316,
                "surveyID": 31989,
                "roleID": 305,
                "roleDescEn": "Tester",
                "roleDescAr": "موظف",
                "roleColor": "#c21414",
                "children": [{
                  "createDate": null,
                  "id": 305,
                  "surveyID": 31989,
                  "roleID": 294,
                  "roleDescEn": "QA",
                  "roleDescAr": "كيو ايه",
                  "roleColor": "#c28b14",
                  "children": [
                    {
                      "createDate": null,
                      "id": 316,
                      "surveyID": 31989,
                      "roleID": 305,
                      "roleDescEn": "Tester",
                      "roleDescAr": "موظف",
                      "roleColor": "#c21414",
                      "children": []
                    },
                    {
                      "createDate": null,
                      "id": 381,
                      "surveyID": 31989,
                      "roleID": 305,
                      "roleDescEn": "Control",
                      "roleDescAr": "كونترول",
                      "roleColor": "#1f9eff",
                      "children": []
                    }
                  ]
                },]
              },
              {
                "createDate": null,
                "id": 381,
                "surveyID": 31989,
                "roleID": 305,
                "roleDescEn": "Control",
                "roleDescAr": "كونترول",
                "roleColor": "#1f9eff",
                "children": []
              }
            ]
          },]
        },
        {
          "createDate": null,
          "id": 305,
          "surveyID": 31989,
          "roleID": 294,
          "roleDescEn": "QA",
          "roleDescAr": "كيو ايه",
          "roleColor": "#c28b14",
          "children": [
            {
              "createDate": null,
              "id": 316,
              "surveyID": 31989,
              "roleID": 305,
              "roleDescEn": "Tester",
              "roleDescAr": "موظف",
              "roleColor": "#c21414",
              "children": []
            },
            {
              "createDate": null,
              "id": 381,
              "surveyID": 31989,
              "roleID": 305,
              "roleDescEn": "Control",
              "roleDescAr": "كونترول",
              "roleColor": "#1f9eff",
              "children": []
            }
          ]
        },

      ]
    },


  ];
  roles: Array<any> = [];
  selectedUsr: Array<object> = []
  curUsrName: Array<string> = [];
  inputValue!: string;
  filterData: Array<any> = [];
  ngOnInit() {

    this.roles.push(this.users.filter((user: any) => {
      return !user["roleID"]
    }));
  }



  alfarid(currentUser: any, lvl: number): void {

    if (this.selectedUsr.find((usr: any) => usr["id"] === currentUser["id"] || usr["roleID"] === currentUser["roleID"])) {

      this.roles = this.roles.slice(0, lvl + 1)
      this.roles[lvl + 1] = currentUser["children"];

      this.curUsrName = this.curUsrName.slice(0, lvl + 1)
      this.curUsrName[lvl] = currentUser["roleDescEn"];

    } else {

      this.roles.push(currentUser["children"])
      this.selectedUsr.push(currentUser)
      this.curUsrName.push(currentUser["roleDescEn"])
    }

  }

  searchFilter(input: string, lvl: number): void {

    this.filterData = this.roles[lvl].filter((data: any) => {
      return data["roleDescEn"].trim().toLowerCase().includes(input?.trim().toLowerCase())
    });
  }
  clear(): void {
    this.inputValue = '';
    this.filterData = []
  }

}









