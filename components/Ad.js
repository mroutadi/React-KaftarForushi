import React, { Component } from 'react'

const AdItem = (props) => {
  const  {ImgURL, title} = props;
  return  (
    <div className="Ad_item">
      <img src={ImgURL} alt={title} />
      <span>{title}</span>
    </div>
  )
}

export default class Ad extends Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <div className="Ad-cont">
        <AdItem ImgURL="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iLTcgMCA0ODUgNDg2IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSIiPjxnPjxwYXRoIGQ9Im00MjQuMjE4NzUgMjIxLjg1MTU2Mi0xLjYzNjcxOS02Ny4xNzE4NzRjLS43NjE3MTktMTQuOTg4MjgyIDEwLjM5MDYyNS0yNy45MjU3ODIgMjUuMzI4MTI1LTI5LjM3ODkwN2wyMy4wMTk1MzIgMTQ1LjI1NzgxM2MuMjgxMjUgMTguMjM4MjgxLTUuMzE2NDA3IDM2LjA3ODEyNS0xNS45Njg3NSA1MC44ODI4MTJsLTU2LjM1MTU2MyA2OC4xODc1Yy01LjE4MzU5NCA2LjI3NzM0NC03Ljc0MjE4NyAxNC4zMTI1LTcuMTQwNjI1IDIyLjQyOTY4OGwxLjUxMTcxOSAyMC4xNDA2MjUtNzguNDYwOTM4LTM3LjM1OTM3NS4zMDA3ODEtLjY0MDYyNWMtNi4yMjI2NTYtMzAuNTk3NjU3IDUuMTc5Njg4LTYyLjEwNTQ2OSAyOS41MzkwNjMtODEuNjQwNjI1bDQuNDcyNjU2LTMuNTg5ODQ0YzcuMDA3ODEzLTUuNjA5Mzc1IDEyLjY1MjM0NC0xMi43MzgyODEgMTYuNTA3ODEzLTIwLjg0NzY1NmwyMS41MzkwNjItNDUuMjIyNjU2YzYuNzYxNzE5LTE0LjE5MTQwNyAyMS42OTkyMTktMjIuNjEzMjgyIDM3LjMzOTg0NC0yMS4wNDY4NzZ6bTAgMCIgZmlsbD0iI2Y3Y2FhNSIgZGF0YS1vcmlnaW5hbD0iI0Y3Q0FBNSIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0yMzUuNzE4NzUgMGM3OC44NTE1NjIgMCAxNDIuNzY5NTMxIDYzLjkyMTg3NSAxNDIuNzY5NTMxIDE0Mi43Njk1MzEgMCA3OC44NTE1NjMtNjMuOTE3OTY5IDE0Mi43Njk1MzEtMTQyLjc2OTUzMSAxNDIuNzY5NTMxLTc4Ljg0NzY1NiAwLTE0Mi43Njk1MzEtNjMuOTE3OTY4LTE0Mi43Njk1MzEtMTQyLjc2OTUzMSAwLTc4Ljg0NzY1NiA2My45MjE4NzUtMTQyLjc2OTUzMSAxNDIuNzY5NTMxLTE0Mi43Njk1MzF6bTEwNy43NDIxODggMTQyLjc2OTUzMWMwLTU5LjUwMzkwNi00OC4yMzgyODItMTA3LjczODI4MS0xMDcuNzQyMTg4LTEwNy43MzgyODEtNTkuNSAwLTEwNy43MzgyODEgNDguMjM0Mzc1LTEwNy43MzgyODEgMTA3LjczODI4MSAwIDU5LjUwMzkwNyA0OC4yMzgyODEgMTA3Ljc0MjE4OCAxMDcuNzM4MjgxIDEwNy43NDIxODggNTkuNTAzOTA2LS4wMDM5MDcgMTA3LjczODI4MS00OC4yMzgyODEgMTA3Ljc0MjE4OC0xMDcuNzQyMTg4em0wIDAiIGZpbGw9IiMwMGFjZWEiIGRhdGEtb3JpZ2luYWw9IiMwMEFDRUEiIGNsYXNzPSIiIGRhdGEtb2xkX2NvbG9yPSIjMDBhY2VhIiBzdHlsZT0iZmlsbDojODFCMUMyIj48L3BhdGg+PHBhdGggZD0ibTM0My40NjA5MzggMTQyLjc2OTUzMWMwIDU5LjUwMzkwNy00OC4yMzgyODIgMTA3Ljc0MjE4OC0xMDcuNzQyMTg4IDEwNy43NDIxODgtNTkuNSAwLTEwNy43MzgyODEtNDguMjM4MjgxLTEwNy43MzgyODEtMTA3Ljc0MjE4OCAwLTU5LjUwMzkwNiA0OC4yMzgyODEtMTA3LjczODI4MSAxMDcuNzM4MjgxLTEwNy43MzgyODEgNTkuNTAzOTA2IDAgMTA3Ljc0MjE4OCA0OC4yMzQzNzUgMTA3Ljc0MjE4OCAxMDcuNzM4Mjgxem0wIDAiIGZpbGw9IiMwMGVmZDEiIGRhdGEtb3JpZ2luYWw9IiMwMEVGRDEiIGNsYXNzPSIiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDBlZmQxIj48L3BhdGg+PHBhdGggZD0ibTQ3LjIxODc1IDIyMS44NTE1NjJjMTUuNjQ0NTMxLTEuNTY2NDA2IDMwLjU4MjAzMSA2Ljg1NTQ2OSAzNy4zMzk4NDQgMjEuMDQ2ODc2bDIxLjU0Mjk2OCA0NS4yMjI2NTZjMy44NTU0NjkgOC4xMDkzNzUgOS41IDE1LjIzODI4MSAxNi41MDc4MTMgMjAuODQ3NjU2bDQuNDcyNjU2IDMuNTg5ODQ0YzI0LjM1OTM3NSAxOS41MzUxNTYgMzUuNzU3ODEzIDUxLjA0Mjk2OCAyOS41MzkwNjMgODEuNjQwNjI1bC4zMDA3ODEuNjQwNjI1LTc4LjQ2MDkzNyAzNy4zNTkzNzUgMS41MDc4MTItMjAuMTQwNjI1Yy42MDE1NjItOC4xMTcxODgtMS45NTMxMjUtMTYuMTUyMzQ0LTcuMTM2NzE5LTIyLjQyOTY4OGwtNTYuMzUxNTYyLTY4LjE4NzVjLTEwLjY1MjM0NC0xNC44MDQ2ODctMTYuMjUtMzIuNjQ0NTMxLTE1Ljk2ODc1LTUwLjg4MjgxMmwyMy4wMTk1MzEtMTQ1LjI1NzgxM2MxNC4zODI4MTIgMS4zOTg0MzggMjUuMzU5Mzc1IDEzLjQ4NDM3NSAyNS4zNjcxODggMjcuOTM3NSAwIC40NzI2NTctLjAxOTUzMi45NjA5MzgtLjAzOTA2MyAxLjQ0MTQwN3ptMCAwIiBmaWxsPSIjZjdjYWE1IiBkYXRhLW9yaWdpbmFsPSIjRjdDQUE1IiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTI3Ny42NDg0MzggMTU5Ljc2MTcxOWgtNDcuOTE3OTY5Yy00LjQxNzk2OSAwLTgtMy41ODIwMzEtOC04di02Mi45MDIzNDRjMC00LjQxNzk2OSAzLjU4MjAzMS04IDgtOHM4IDMuNTgyMDMxIDggOHY1NC45MDIzNDRoMzkuOTE3OTY5YzQuNDIxODc0IDAgOCAzLjU3ODEyNSA4IDggMCA0LjQxNzk2OS0zLjU3ODEyNiA4LTggOHptMCAwIiBmaWxsPSIjZmVkYjQxIiBkYXRhLW9yaWdpbmFsPSIjRkVEQjQxIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiM3QkI2Q0MiIGRhdGEtb2xkX2NvbG9yPSIjZmVkYjQxIj48L3BhdGg+PHBhdGggZD0ibTMxNC44MTI1IDQwMi4xOTkyMTljLTMuODAwNzgxLS4wMDM5MDctNy4wNzQyMTktMi42ODM1OTQtNy44MzIwMzEtNi40MDYyNS02LjkwMjM0NC0zMy41NDI5NjkgNS42MDkzNzUtNjguMTE3MTg4IDMyLjM3NS04OS40NzY1NjNsNC40NjQ4NDMtMy41ODU5MzdjNi4wNjI1LTQuODY3MTg4IDEwLjk0OTIxOS0xMS4wMzUxNTcgMTQuMzAwNzgyLTE4LjA0Njg3NWwyMS41MzkwNjItNDUuMjIyNjU2YzEwLjc0MjE4OC0yMi41NTg1OTQgMzcuNzM4MjgyLTMyLjEzNjcxOSA2MC4yOTI5NjktMjEuMzk0NTMyIDMuOTg4MjgxIDEuODk4NDM4IDUuNjgzNTk0IDYuNjcxODc1IDMuNzg1MTU2IDEwLjY2NDA2M2wtMzUuNDAyMzQzIDc0LjMzOTg0M2MtMS4yMTA5MzggMi42MDU0NjktMy43MzA0NjkgNC4zNjMyODItNi41OTc2NTcgNC41OTc2NTctMi44NjMyODEuMjM4MjgxLTUuNjM2NzE5LTEuMDgyMDMxLTcuMjU3ODEyLTMuNDU3MDMxLTEuNjI1LTIuMzc1LTEuODQ3NjU3LTUuNDM3NS0uNTg5ODQ0LTguMDE5NTMybDMxLjQ4ODI4MS02Ni4xMjVjLTEyLjg4NjcxOC0yLjE2MDE1Ni0yNS42NDQ1MzEgNC40ODA0NjktMzEuMjY5NTMxIDE2LjI3MzQzOGwtMjEuNTQyOTY5IDQ1LjIyMjY1NmMtNC4zODY3MTggOS4xOTE0MDYtMTAuNzg5MDYyIDE3LjI3NzM0NC0xOC43MzQzNzUgMjMuNjUyMzQ0bC00LjQ1NzAzMSAzLjU4MjAzMWMtMjIuMDgyMDMxIDE3LjYxNzE4Ny0zMi40MDIzNDQgNDYuMTQwNjI1LTI2LjcxMDkzOCA3My44MDg1OTQuNDc2NTYzIDIuMzU1NDY5LS4xMjg5MDYgNC44MDA3ODEtMS42NDg0MzcgNi42NjAxNTZzLTMuNzk2ODc1IDIuOTQxNDA2LTYuMTk5MjE5IDIuOTQxNDA2em0wIDAiIGZpbGw9IiNlZGIyODgiIGRhdGEtb3JpZ2luYWw9IiNFREIyODgiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMTU2LjYyODkwNiA0MDIuMTk5MjE5Yy0yLjQwMjM0NCAwLTQuNjc5Njg3LTEuMDc4MTI1LTYuMTk5MjE4LTIuOTM3NS0xLjUxOTUzMi0xLjg2MzI4MS0yLjEyNS00LjMwODU5NC0xLjY0ODQzOC02LjY2MDE1NyA1LjY5MTQwNi0yNy42Njc5NjgtNC42Mjg5MDYtNTYuMTgzNTkzLTI2LjcwNzAzMS03My44MDA3ODFsLTQuNDcyNjU3LTMuNTkzNzVjLTcuOTQxNDA2LTYuMzc1LTE0LjMzOTg0My0xNC40NjA5MzctMTguNzI2NTYyLTIzLjY0ODQzN2wtMjEuNTM5MDYyLTQ1LjIxODc1Yy01LjYyNS0xMS43OTI5NjktMTguMzgyODEzLTE4LjQzMzU5NC0zMS4yNjk1MzItMTYuMjczNDM4bDMxLjQ4ODI4MiA2Ni4xMjVjMS4yNTc4MTIgMi41ODIwMzIgMS4wMzUxNTYgNS42NDQ1MzItLjU4OTg0NCA4LjAxOTUzMi0xLjYyMTA5NCAyLjM3NS00LjM5NDUzMiAzLjY5NTMxMi03LjI1NzgxMyAzLjQ1NzAzMS0yLjg2NzE4Ny0uMjM0Mzc1LTUuMzg2NzE5LTEuOTkyMTg4LTYuNTk3NjU2LTQuNTk3NjU3bC0zNS40MDIzNDQtNzQuMzM5ODQzYy0xLjg5ODQzNy0zLjk5MjE4OC0uMjAzMTI1LTguNzY1NjI1IDMuNzg1MTU3LTEwLjY2NDA2MyAyMi41NTQ2ODctMTAuNzQyMTg3IDQ5LjU1MDc4MS0xLjE2NDA2MiA2MC4yOTI5NjggMjEuMzk0NTMybDIxLjUzNTE1NiA0NS4yMTg3NWMzLjM0Mzc1IDcuMDExNzE4IDguMjI2NTYzIDEzLjE3OTY4NyAxNC4yODUxNTcgMTguMDQyOTY4bDQuNDgwNDY5IDMuNjAxNTYzYzI2Ljc2NTYyNCAyMS4zNTkzNzUgMzkuMjczNDM3IDU1LjkzMzU5MyAzMi4zNzEwOTMgODkuNDcyNjU2LS43NTc4MTIgMy43MjI2NTYtNC4wMzEyNSA2LjM5ODQzNy03LjgyODEyNSA2LjQwMjM0NHptMCAwIiBmaWxsPSIjZWRiMjg4IiBkYXRhLW9yaWdpbmFsPSIjRURCMjg4IiBjbGFzcz0iIj48L3BhdGg+PGcgZmlsbD0iIzAwYWNlYSI+PHBhdGggZD0ibTM5Mi45ODA0NjkgNDMyLjE5OTIxOSA4LjgyODEyNSA0LjIxMDkzNy0yMy42MDkzNzUgNDkuNTg5ODQ0LTEwOC44MjAzMTMtNTEuODI4MTI1IDIzLjYyMTA5NC00OS41ODIwMzEgMjEuNTE5NTMxIDEwLjI1em0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMEFDRUEiIGNsYXNzPSIiIGRhdGEtb2xkX2NvbG9yPSIjMDBBQ0VBIiBzdHlsZT0iZmlsbDojODFCMUMyIj48L3BhdGg+PHBhdGggZD0ibTc4LjQ2MDkzOCA0MzIuMTk5MjE5IDc4LjQ2MDkzNy0zNy4zNTkzNzUgMjEuNTE5NTMxLTEwLjI1IDIzLjYxNzE4OCA0OS41ODIwMzEtMTA4LjgyMDMxMyA1MS44MjgxMjUtMjMuNjA5Mzc1LTQ5LjU4OTg0NHptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDBBQ0VBIiBjbGFzcz0iIiBkYXRhLW9sZF9jb2xvcj0iIzAwQUNFQSIgc3R5bGU9ImZpbGw6IzgxQjFDMiI+PC9wYXRoPjwvZz48L2c+IDwvc3ZnPg=="
                    title="ذخیره زمان" />
        <AdItem ImgURL="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDcyIDQ3MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDcyIDQ3MjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBzdHlsZT0iZmlsbDojOTREOEUzOyIgZD0iTTgwLDQ0aDM2OGwtNDAsMjU2SDEyMEw4MCw0NHoiIGRhdGEtb3JpZ2luYWw9IiM5NEQ4RTMiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBzdHlsZT0iZmlsbDojODRDREQ5OyIgZD0iTTExMy45NzYsMjYxLjQ1NkwxMjAsMzAwaDI4OGwzNC43OTItMjIyLjY4OEwxMTMuOTc2LDI2MS40NTZ6IiBkYXRhLW9yaWdpbmFsPSIjODRDREQ5IiBjbGFzcz0iIj48L3BhdGg+PHBhdGggc3R5bGU9ImZpbGw6I0ZGQzJDMiIgZD0iTTQxNC43NzYsMzA4bDQ5LjExMi0yOTQuNjhMNDY0LDRoLTE2djcuMzM2TDQ0My44ODgsMzZIODQuMTA0TDc4Ljc3Niw0SDB2MTZoNjUuMjI0bDQ2LjYxNiwyNzkuNjcyICBMODUuNzUyLDQwNEg0MjR2LTE2SDEwNi4yNDhsMjAtODBINDE0Ljc3NnogTTI4OCwxODB2NDhoLTQ4di00OEgyODh6IE0yNDAsMTY0di00OGg0OHY0OEgyNDB6IE0yMjQsMjI4aC00OHYtNDhoNDhWMjI4eiBNMjI0LDI0NCAgdjQ4aC00OHYtNDhIMjI0eiBNMjQwLDI0NGg0OHY0OGgtNDhWMjQ0eiBNMzA0LDI0NGg0OHY0OGgtNDhWMjQ0eiBNMzA0LDIyOHYtNDhoNDh2NDhIMzA0eiBNMzY4LDE4MGg1MS44OTZsLTgsNDhIMzY4VjE4MHogICBNMzY4LDE2NHYtNDhoNjIuNTZsLTgsNDhIMzY4eiBNMzUyLDE2NGgtNDh2LTQ4aDQ4VjE2NHogTTMwNCwxMDBWNTJoNDh2NDhIMzA0eiBNMjg4LDEwMGgtNDhWNTJoNDhWMTAweiBNMjI0LDEwMGgtNDhWNTJoNDhWMTAweiAgIE0yMjQsMTE2djQ4aC00OHYtNDhIMjI0eiBNMTYwLDE2NGgtNTQuNTZsLTgtNDhIMTYwVjE2NHogTTE2MCwxODB2NDhoLTQzLjg5NmwtOC00OEgxNjB6IE0xNjAsMjQ0djQ4aC0zMy4yMjRsLTgtNDhIMTYweiBNMzY4LDI5MiAgdi00OGg0MS4yMjRsLTgsNDhIMzY4eiBNNDMzLjIyNCwxMDBIMzY4VjUyaDczLjIyNEw0MzMuMjI0LDEwMHogTTE2MCw1MnY0OEg5NC43NzZsLTgtNDhIMTYweiIgZGF0YS1vcmlnaW5hbD0iIzVDOEVBMSIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzVDOEVBMSI+PC9wYXRoPjxnPgoJPGNpcmNsZSBzdHlsZT0iZmlsbDojNjg5Q0IwOyIgY3g9IjE2MCIgY3k9IjQyOCIgcj0iNDAiIGRhdGEtb3JpZ2luYWw9IiM2ODlDQjAiIGNsYXNzPSIiPjwvY2lyY2xlPgoJPGNpcmNsZSBzdHlsZT0iZmlsbDojNjg5Q0IwOyIgY3g9IjM2MCIgY3k9IjQyOCIgcj0iNDAiIGRhdGEtb3JpZ2luYWw9IiM2ODlDQjAiIGNsYXNzPSIiPjwvY2lyY2xlPgo8L2c+PGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRjRFRkVGOyIgZD0iTTE1Miw0MjBoMTZ2MTZoLTE2VjQyMHoiIGRhdGEtb3JpZ2luYWw9IiNGNEVGRUYiIGNsYXNzPSIiPjwvcGF0aD4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGNEVGRUY7IiBkPSJNMzUyLDQyMGgxNnYxNmgtMTZWNDIweiIgZGF0YS1vcmlnaW5hbD0iI0Y0RUZFRiIgY2xhc3M9IiI+PC9wYXRoPgo8L2c+PHBhdGggc3R5bGU9ImZpbGw6I0YyQ0Y3NzAwIiBkPSJNNDIwLjgsMjIzLjA4OGMtMi45ODQtMC44ODEtNi4wMjItMS41NjUtOS4wOTYtMi4wNDhjLTAuNjgtMC4xMTItMS4zNjgtMC4yMjQtMi4wNjQtMC4zMiAgYy0xNy4zOTItMi41MDItMzUuMDkxLDEuNTcyLTQ5LjY0LDExLjQyNGMtMzMuMDY2LDIyLjA4Ny00MS45NjcsNjYuNzk4LTE5Ljg4LDk5Ljg2NHM2Ni43OTgsNDEuOTY3LDk5Ljg2NCwxOS44OCAgczQxLjk2Ny02Ni43OTgsMTkuODgtOTkuODY0QzQ1MC41OTEsMjM4LjE0MSw0MzYuNzgyLDIyNy45MTMsNDIwLjgsMjIzLjA4OEw0MjAuOCwyMjMuMDg4eiIgZGF0YS1vcmlnaW5hbD0iI0YyQ0Y3NyIgY2xhc3M9IiIgZGF0YS1vbGRfY29sb3I9IiNGMkNGNzciPjwvcGF0aD48cGF0aCBzdHlsZT0iZmlsbDojREVCQzY2MDAiIGQ9Ik00MDAsMzY0YzM5Ljc2NC0wLjAzMyw3MS45NzMtMzIuMjk1LDcxLjk0LTcyLjA2Yy0wLjAyNi0zMS43MDgtMjAuNzkyLTU5LjY2Ni01MS4xNC02OC44NTIgIGMtMi45ODQtMC44ODEtNi4wMjItMS41NjUtOS4wOTYtMi4wNDhjLTAuNjgtMC4xMTItMS4zNjgtMC4yMjQtMi4wNjQtMC4zMmMtMy4xOTMtMC40NTgtNi40MTQtMC42OTktOS42NC0wLjcyTDQwMCwzNjR6IiBkYXRhLW9yaWdpbmFsPSIjREVCQzY2IiBjbGFzcz0iIiBkYXRhLW9sZF9jb2xvcj0iI0RFQkM2NiI+PC9wYXRoPjxwYXRoIHN0eWxlPSJmaWxsOiM3NTY5NjkwMCIgZD0iTTQ0MCwyODRoLTMydi0zMmgtMTZ2MzJoLTMydjE2aDMydjMyaDE2di0zMmgzMlYyODR6IiBkYXRhLW9yaWdpbmFsPSIjNzU2OTY5IiBjbGFzcz0iIiBkYXRhLW9sZF9jb2xvcj0iIzc1Njk2OSI+PC9wYXRoPjwvZz4gPC9zdmc+" 
                    title="قدرت انتخاب" />
        <AdItem ImgURL="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTEyLjAwMiA1MTIuMDAyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMi4wMDIgNTEyLjAwMiIgd2lkdGg9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBjbGFzcz0iIj48Zz48Zz48ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0ibTIwMC41MDYgNDMyLjAwMmgyMDEuMzI0YzAtMzQuNjI1IDE5LjE3NS02OS4yNTEgMTkuMTc1LTEwMy44NzYgMC0zMi4xMjUgMC01Mi4yNSAwLTg0LjM3NCAwLTQzLjA0OC00Ni4zMTgtNTQuNjU1LTYwLjEzLTQwLjI0Ny05LjE4MS0yMS42OC00MC4yNTMtMjguMzM5LTU1LjI4OS0xNi42MjQtMTEuMjM3LTIyLjc4Mi00Ni42ODUtMjUuNDI2LTU1LjA4Ny0xMC4yNDdsLTIuMDU4LTk0LjYzYy0uMzU5LTE2LjQ5Ni0xMi45NDMtMzAtMjguNzYxLTMwcy0yOC43NjEgMTMuNS0yOC43NjEgMzB2MjEwLjc0OGMtMzMuNzg0LTE3LjI1LTI1LjcwOC00Mi4zNjUtNjIuMjIzLTUwLjIzOS0yMy4yNjctNS4wMTgtNDQuMTY5IDE1LjIxNi0zNS44MTYgMjcuODQ0IDUuOTEyIDguOTM2IDE3LjgyIDE5LjU0NiAyOS4xNDIgNTAuNjI3IDIyLjY2MyA2Mi4yMDkgNzguNDg0IDQ4LjczOSA3OC40ODQgMTExLjAxOHoiIGZpbGw9IiNmZmRjZDUiIGRhdGEtb3JpZ2luYWw9IiNGRkRDRDUiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiNmZmRjZDUiPjwvcGF0aD48cGF0aCBkPSJtNDAxLjgzIDQzMi4wMDJoLTIwMS4zMjQtOS45NTF2NzBoMjIxLjIyNnYtNzB6IiBmaWxsPSIjZmY5MzQ2IiBkYXRhLW9yaWdpbmFsPSIjRkY5MzQ2IiBjbGFzcz0iIiBzdHlsZT0iZmlsbDojRTJGRkUyIiBkYXRhLW9sZF9jb2xvcj0iI2ZmOTM0NiI+PC9wYXRoPjwvZz48Zz48cGF0aCBkPSJtNDMxLjAwNCAzMjguMTI1di04NC4zNzVjMC0yNC4xMTYtMTIuNzM2LTQzLjY0Ni0zNC4wNy01Mi4yNDMtMTEuNDg1LTQuNjI4LTIzLjM3NC01LjA2OC0zMi42ODgtMS42NjUtNC4yNDUtNS40LTkuODQ4LTkuOTIzLTE2LjU3OC0xMy4yMTctMTIuODIxLTYuMjc0LTI3LjMxMy03LjEzNS0zOC44ODktMi44MDItNi4wMjgtNy4xMjEtMTQuNDY3LTEyLjQyMy0yNC42My0xNS4wNTEtOC41MDYtMi4yLTE2Ljg2My0yLjE4OC0yNC4wNDItLjI3OWwtMS42NjgtNzYuNzA4Yy0uNDg2LTIyLjMwOC0xNy41MTItMzkuNzgyLTM4Ljc2LTM5Ljc4Mi0yMS4zNzIgMC0zOC43NiAxNy45NDQtMzguNzYgNDB2MTkxLjQ4NmMtNC4wMzEtNC4wMDQtNy4wMjEtOC4yMy0xMC4xMDEtMTIuNTgzLTcuNjQ2LTEwLjgwOC0xNi4zMTEtMjMuMDU3LTQwLjAxNS0yOC4xNjktMjAuMDc2LTQuMzI5LTM3LjM2NyA1LjYyMi00NC45MzYgMTYuNjk5LTUuOTg2IDguNzYyLTYuNDgzIDE4LjY0NS0xLjMyOCAyNi40MzggMS41MjEgMi4yOTggMy4zIDQuNTg2IDUuMTg0IDcuMDA4IDYuMTcyIDcuOTM1IDE0LjYyNCAxOC44MDEgMjIuOTAyIDQxLjUyNCAxMS41MyAzMS42NSAzMS40NDQgNDUuOTMxIDQ3LjQ0NiA1Ny40MDcgMTUuNDM1IDExLjA2OCAyNy4wOTMgMTkuNDM5IDI5LjgyMSA0MC4yMjMtNS4yMTMuMzQyLTkuMzM4IDQuNjY3LTkuMzM4IDkuOTY3djcwYzAgNS41MjMgNC40NzggMTAgMTAgMTBoMjIxLjIyN2M1LjUyMiAwIDEwLTQuNDc3IDEwLTEwdi03MGMwLTUuMzIxLTQuMTYtOS42NTktOS40MDMtOS45NyAxLjMzLTEyLjc0NCA0LjkxNi0yNS43MiA4LjY3Ny0zOS4zIDQuODkxLTE3LjY2OCA5Ljk0OS0zNS45MzYgOS45NDktNTQuNjA4em0tMjkuMjIzIDE2My44NzdoLTIwMS4yMjZ2LTUwaDU1LjYwOWM1LjUyMiAwIDEwLTQuNDc3IDEwLTEwcy00LjQ3OC0xMC0xMC0xMGgtNDYuMTQ5Yy0zLjEyNC0zMS4yMDUtMjAuOTctNDQuMDI0LTM4LjI4Ny01Ni40NDMtMTUuMTg4LTEwLjg5My0zMC44OTUtMjIuMTU1LTQwLjMxLTQ4LTkuMzU0LTI1LjY3Ni0xOS4zMTUtMzguNDgzLTI1LjkwOC00Ni45NTgtMS43MTMtMi4yMDItMy4xOTItNC4xMDQtNC4yODktNS43NjMtLjc5MS0xLjE5NS45NTktMy44MjQgMS4xNjEtNC4xMiAzLjkzOS01Ljc2OSAxMy43NjEtMTAuNjgzIDI0LjIwNS04LjQzMSAxNi4wOTEgMy40NyAyMC43OSAxMC4xMTMgMjcuOTA0IDIwLjE2OCA1LjY3NSA4LjAyMyAxMi41ODcgMTcuNzkzIDI2LjQyOCAyNi4xN3Y0LjEyNmMwIDUuNTIzIDQuNDc4IDEwIDEwIDEwczEwLTQuNDc3IDEwLTEwdi0yMjAuNzQ4YzAtMTEuMDI4IDguNDE2LTIwIDE4Ljc2MS0yMCAxMC4xMDQgMCAxOC41MjEgOS4wNyAxOC43NjMgMjAuMjE3bDIuODc2IDEzMi4yNDljLjEyMSA1LjUyMSA0LjY3MSA5LjkzNyAxMC4yMTYgOS43OCA1LjUyMS0uMTIgOS45LTQuNjkzIDkuNzgtMTAuMjE1bC0uNzQxLTM0LjA3OGMzLjI0MS0yLjYyMyAxMC41NTctMy44OTMgMTguNTY4LTEuODIxIDQuNjYzIDEuMjA2IDE5Ljg3NiA2LjUxMyAxOS44NzYgMjQuMTc4IDAgNS41MjMgNC40NzggMTAgMTAgMTBzMTAtNC40NzcgMTAtMTBjMC0zLjU4OC0uNC03LjA2Mi0xLjE3MS0xMC4zODQgNi4xOTMtMS41NTkgMTQuMjAzLS42OCAyMS4wMjkgMi42NjEgNS40NTUgMi42NjkgMTQuNjA2IDkuMDk4IDE0LjYwNiAyMi4xNiAwIDUuNTIzIDQuNDc4IDEwIDEwIDEwczEwLTQuNDc3IDEwLTEwYzAtMi45MzctLjI4LTUuODA4LS44MjctOC41OTIgNC4yNjEtMS4wMDkgMTAuNDUzLS42NiAxNi44MDMgMS44OTkgNi40NzkgMi42MSAyMS41NDYgMTEuMTIgMjEuNTQ2IDMzLjY5MnY4NC4zNzVjMCAxNS45NTQtNC40OCAzMi4xMzctOS4yMjUgNDkuMjctNC4wMTQgMTQuNDk4LTguMTMyIDI5LjQwNi05LjQ4MyA0NC42MDZoLTQ2LjEzMmMtNS41MjIgMC0xMCA0LjQ3Ny0xMCAxMHM0LjQ3OCAxMCAxMCAxMGg1NS42MTd6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTE0Ny42NzcgOTIuMDAzYzUuNTIyIDAgMTAtNC40NzcgMTAtMTAgMC0zNC4xODkgMjcuODEzLTYyLjAwMyA2Mi4wMDItNjIuMDAzczYyLjAwMyAyNy44MTQgNjIuMDAzIDYyLjAwM2MwIDUuNTIzIDQuNDc4IDEwIDEwIDEwczEwLTQuNDc3IDEwLTEwYzAtNDUuMjE3LTM2Ljc4Ni04Mi4wMDMtODIuMDAzLTgyLjAwMy00NS4yMTYgMC04Mi4wMDIgMzYuNzg2LTgyLjAwMiA4Mi4wMDMgMCA1LjUyMyA0LjQ3NyAxMCAxMCAxMHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMzAxLjE2OCA0MjIuMDAxaC0uMDA4Yy01LjUyMiAwLTkuOTk2IDQuNDc3LTkuOTk2IDEwczQuNDgxIDEwIDEwLjAwNCAxMCAxMC00LjQ3NyAxMC0xMC00LjQ3OC0xMC0xMC0xMHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9nPjwvZz4gPC9zdmc+" 
                    title="انتخاب کالا" />
        <AdItem ImgURL="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBzdHlsZT0iZmlsbDojQzdFQkZGIiBkPSJNMzg3LjQ2LDM3My4xNUwzMzYsMzU2SDE3NmwtNTEuNDYsMTcuMTVDNzEuNjcsMzkwLjc4LDM2LDQ0Ni4yNiwzNiw1MDJoNDQwICBDNDc2LDQ0Ni4yNiw0NDAuMzMsMzkwLjc4LDM4Ny40NiwzNzMuMTV6IiBkYXRhLW9yaWdpbmFsPSIjNDQ0Qjc1IiBjbGFzcz0iIiBkYXRhLW9sZF9jb2xvcj0iIzQ0NEI3NSI+PC9wYXRoPjxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMzU1LjY1LDE2MS4zOEwzMzIsMTU4Yy0zNi4zNS01LjE5LTcwLjA0LTIyLjA0LTk2LTQ4Yy0yNS4xOCwwLTQ4Ljg5LDExLjg2LTY0LDMybC0xNS42LDIwLjggIGMwLjgxLDIzLjM1LDIuOTMsNDcuNDcsNi4zNCw3MC4yYzQuMjQ1LDI4LjA5OCw3LjgsNTQuNTUyLDM1LjY0LDc4LjY4bC0wLjUsMC41NmMtNy4zMzIsMTQuNjY1LTE0LjYyNSwyOS4yNDktMjEuODgsNDMuNzYgIGMxMi45NjUsMzguODc4LDMyLjI2OCw3Ni4zNDEsNTcuOTUsMTEwLjZMMjU2LDUwMmwyMi4wNS0zNS40YzkuOTMtMTMuMjQsMTguOTktMjcuMDgsMjcuMTMtNDEuNDIgIGMxMi40OC0yMS45NywyMi44LTQ1LjE0LDMwLjgyLTY5LjE4bC0yMS44OC00My43NmwtMC41LTAuNTZjMTYuNzgtMTQuNTksMjguNDgtMzUuMzIsMzIuMTktNTcuNTcgIGMxLjk1LTExLjc3LDIuNjI4LTE1LjUyMywzLjUxLTIxLjUxYzMuNDUtMjMuMDcsNS41Ni00Ny41Niw2LjM0LTcxLjIyTDM1NS42NSwxNjEuMzhMMzU1LjY1LDE2MS4zOHoiIGRhdGEtb3JpZ2luYWw9IiNGRkZGRkYiPjwvcGF0aD48cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGIiBkPSJNMzU1LjY1LDE2MS4zOEwzMzIsMTU4Yy0zNi4zNS01LjE5LTcwLjA0LTIyLjA0LTk2LTQ4Yy0yNS4xOCwwLTQ4Ljg5LDExLjg2LTY0LDMybC0xNS42LDIwLjggIGMwLjgxLDIzLjM1LDIuOTMsNDcuNDcsNi4zNCw3MC4yYzQuMjQ1LDI4LjA5OCw3LjgsNTQuNTUyLDM1LjY0LDc4LjY4bC0wLjUsMC41NkMxOTAuNTQ3LDMyNi45MDUsMjU3LDM3MSwyNTcsMzcxbDU3LjEyLTU4Ljc2ICBsLTAuNS0wLjU2YzE2Ljc4LTE0LjU5LDI4LjQ4LTM1LjMyLDMyLjE5LTU3LjU3YzEuOTUtMTEuNzcsMi42MjgtMTUuNTIzLDMuNTEtMjEuNTFjMy40NS0yMy4wNyw1LjU2LTQ3LjU2LDYuMzQtNzEuMjIgIEwzNTUuNjUsMTYxLjM4TDM1NS42NSwxNjEuMzh6IiBkYXRhLW9yaWdpbmFsPSIjQTg2OTMxIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjQTg2OTMxIj48L3BhdGg+PHBhdGggc3R5bGU9ImZpbGw6I0JGOEJERTsiIGQ9Ik0zOTYsMTUwdjYzYzAsMTEuMDUtOC45NSwyMC0yMCwyMGgtMjRsLTIuNjgtMC40YzMuNDUtMjMuMDcsNS41Ni00Ny41Niw2LjM0LTcxLjIyICBjMC4xMy0zLjgyLDAuMjItNy42MSwwLjI2LTExLjM4SDM1NkgzOTZ6IiBkYXRhLW9yaWdpbmFsPSIjQkY4QkRFIj48L3BhdGg+PHBhdGggc3R5bGU9ImZpbGw6I0M3RUJGRiIgZD0iTTI2NC45NSw1MGM1MC4yNywwLDkxLjA4LDQxLjE0LDkxLjA1LDkxLjQxYzAsNS4wNTYtMC4xMDYsMTMuMTAyLTAuMzQsMTkuOTcgIGMtMjYuMzc1LTMuNzY4LTIzLjQzMy0zLjM0OC0yMy42Ni0zLjM4Yy0zNi4zNS01LjE5LTcwLjA0LTIyLjA0LTk2LTQ4Yy0yNS4xOCwwLTQ4Ljg5LDExLjg2LTY0LDMybC0xNS42LDIwLjggIGMtMC4yNi02Ljk3OC0wLjQtMTUuMTMyLTAuNC0yMS4zOUMxNTUuOTcsOTEuMTQsMTk2Ljc4LDUwLDI0Ny4wNSw1MEgyNTZIMjY0Ljk1eiIgZGF0YS1vcmlnaW5hbD0iIzQ0NEI3NSIgY2xhc3M9IiIgZGF0YS1vbGRfY29sb3I9IiM0NDRCNzUiPjwvcGF0aD48Zz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNCRjhCREU7IiBkPSJNMjU2LDI1M2MxMS4wNSwwLDIwLDguOTUsMjAsMjBjMCwxMS4wNC04Ljk2LDIwLTIwLDIwaC0yMGMtMTEuMDUsMC0yMC04Ljk1LTIwLTIwICAgYzAtMTEuMDQsOC45Ni0yMCwyMC0yMEgyNTZ6IiBkYXRhLW9yaWdpbmFsPSIjQkY4QkRFIj48L3BhdGg+Cgk8cGF0aCBzdHlsZT0iZmlsbDojQkY4QkRFOyIgZD0iTTE2Mi43NCwyMzNIMTM2Yy0xMS4wNSwwLTIwLTguOTUtMjAtMjB2LTYzaDQwaDAuMDhjMC4wNSw0LjIzLDAuMTYsOC41LDAuMzIsMTIuOCAgIEMxNTcuMjEsMTg2LjE1LDE1OS4zMywyMTAuMjcsMTYyLjc0LDIzM3oiIGRhdGEtb3JpZ2luYWw9IiNCRjhCREUiPjwvcGF0aD4KPC9nPjxwYXRoIGQ9Ik0zNjYsNDE2YzUuNTIsMCwxMC00LjQ4LDEwLTEwcy00LjQ4LTEwLTEwLTEwcy0xMCw0LjQ4LTEwLDEwUzM2MC40OCw0MTYsMzY2LDQxNnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiIHN0eWxlPSJmaWxsOiMwMDAwMDAiPjwvcGF0aD48cGF0aCBkPSJNMzYsNTEyaDQ0MGM1LjUyMiwwLDEwLTQuNDc3LDEwLTEwYzAtNjEuNzI5LTQwLjExMS0xMTkuOTA4LTk1LjM3OC0xMzguMzM3bC00Ny41My0xNS44NGwtMTcuMDYzLTM0LjEyNyAgYzE1LjM3Mi0xNS42NDYsMjYuMDQ1LTM2LjM0OCwyOS42NDQtNTcuOTQxTDM1Ny44MDEsMjQzSDM3NmMxNi41NDIsMCwzMC0xMy40NTgsMzAtMzB2LTYzQzQwNiw2Ny4yOSwzMzguNzEsMCwyNTYsMCAgYy04Mi45MjIsMC0xNTAsNjcuMDk3LTE1MCwxNTB2NjNjMCwxMy4wMzYsOC4zNjEsMjQuMTUyLDIwLDI4LjI4VjI1M2MwLDE2LjU0MiwxMy40NTgsMzAsMzAsMzBoOC43ODIgIGM0LjMzNSw5LjQxNyw5Ljk0NiwxOC4xMzksMTYuNzc0LDI1Ljk3NGMxLjQxNiwxLjYyOCwyLjg5MywzLjIwNiw0LjQwNiw0Ljc0MWwtMTcuMDU0LDM0LjEwOGwtNDcuNTMxLDE1Ljg0MSAgQzY2LjExMiwzODIuMDkyLDI2LDQ0MC4yNzEsMjYsNTAyQzI2LDUwNy41MjMsMzAuNDc3LDUxMiwzNiw1MTJ6IE0yNTYsNDgzLjA4NmwtMTMuNTYyLTIxLjc3MyAgYy0wLjE1Mi0wLjI0NC0wLjMxNC0wLjQ4MS0wLjQ4Ni0wLjcxMWMtOC4wOTgtMTAuODAyLTE1LjY1Mi0yMi4wOTktMjIuNTMyLTMzLjY2MmwzNS42NjMtMzcuNzE0bDM3LjU3OCwzNy41NzggIGMtNi45MjYsMTEuNjQ3LTE0LjUwNiwyMi45OTEtMjIuNjExLDMzLjc5NkMyNjkuNTYsNDYxLjI1MywyNzAuMjU1LDQ2MC4yMjQsMjU2LDQ4My4wODZ6IE0zMDIuNzc4LDQwOC42MzZsLTMzLjk0OC0zMy45NDggIGw0Mi43MzYtNDUuMTk0bDEzLjYwNCwyNy4yMDlDMzE5LjAwNiwzNzQuNTQxLDMxMS41MDEsMzkxLjk0MiwzMDIuNzc4LDQwOC42MzZ6IE0yNTQuNjgzLDM2MC41NDFsLTE5LjUyNC0xOS41MjUgIGM2Ljg1OSwxLjQ0NSwxMy44NTIsMi4xODQsMjAuODQxLDIuMTg0YzUuNDcxLDAsMTAuOTQzLTAuNDU4LDE2LjM1My0xLjM0NkwyNTQuNjgzLDM2MC41NDF6IE0xOTguNzM5LDMzMi44ODJsNDIuMTk2LDQyLjE5NyAgbC0zMS43MTgsMzMuNTQyYy04LjczMi0xNi43MTQtMTYuMjM1LTM0LjEwOS0yMi4zODktNTEuOTE3TDE5OC43MzksMzMyLjg4MnogTTQ2NS42LDQ5MkgyNzQuMDFsMTIuMzAxLTE5Ljc0OCAgYzEwLjAyNy0xMy40LDE5LjMwMS0yNy41NzQsMjcuNTY0LTQyLjEzMmMwLjA1LTAuMDg4LDAuMDk3LTAuMTc4LDAuMTQ3LTAuMjY2YzAuMDA2LTAuMDExLDAuMDEyLTAuMDIxLDAuMDE4LTAuMDMyICBjMTEuMDU1LTE5LjUsMjAuNTA5LTQwLjA0NywyOC4xNjQtNjEuMjEzbDQyLjA5MywxNC4wMjhDNDI4LjY2OCwzOTcuNDMzLDQ2MS42MzcsNDQyLjQ2MSw0NjUuNiw0OTJ6IE0xMzYsMjIzICBjLTUuNTE0LDAtMTAtNC40ODYtMTAtMTB2LTUzaDIwLjI5OGMwLjAzMywxLjA0MywwLjA2OCwyLjA5MSwwLjEwNywzLjE0NmMwLjAwMSwwLjAzNiwwLjAwMywwLjA3MSwwLjAwNCwwLjEwNyAgYzAsMC4wMDMsMCwwLjAwNiwwLDAuMDA5YzAuNywyMC4wNzIsMi4zNzIsNDAuNDgxLDQuODU2LDU5LjczN0gxMzZWMjIzeiBNMzQ1LjkyMiwxNDkuNzljMCwwLjAzMi0wLjAwMSwwLjA2NS0wLjAwMSwwLjA5OCAgbC0xMi41MDgtMS43ODdjLTMzLjk4LTQuODUyLTY2LjA2NC0yMC44OTQtOTAuMzQyLTQ1LjE3MkMyNDEuMTk1LDEwMS4wNTQsMjM4LjY1MiwxMDAsMjM2LDEwMCAgYy0yNi44NTYsMC01Mi41NjQsMTIuMjM2LTY5LjU1OCwzMi45MDhDMTcwLjYzLDkyLjE4OSwyMDUuMDUzLDYwLDI0Ny4wNSw2MGgxNy45YzQ0LjgwOSwwLDgxLjA3NiwzNi42NTEsODEuMDUsODEuNDEgIEMzNDYsMTQ0LjU1NywzNDUuOTc1LDE0Ny4yOTcsMzQ1LjkyMiwxNDkuNzl6IE0zODYsMjEzYzAsNS41MTQtNC40ODYsMTAtMTAsMTBoLTE1LjI2MmMyLjU0Mi0xOS42OSw0LjIzNi00MC42NDMsNC45MTctNjEuMjggIGMwLjAyLTAuNTgyLDAuMDM2LTEuMTQ4LDAuMDU0LTEuNzJIMzg2VjIxM3ogTTI1NiwyMGM2OC4zMTgsMCwxMjQuNDk2LDUyLjk3MiwxMjkuNjE5LDEyMGgtMTkuNjM1ICBjLTAuNzItNTUuMjI3LTQ1LjY5My0xMDAtMTAxLjAzMy0xMDBoLTE3LjljLTU1LjMzOSwwLTEwMC4zMTUsNDQuNzczLTEwMS4wMzQsMTAwSDEyNi4zOEMxMzEuNDQ1LDcyLjk3OSwxODcuMzc3LDIwLDI1NiwyMHogICBNMTQ2LDI1M3YtMTBoOC4xOThsMi4xMjgsMTIuNzU5YzAuNDA2LDIuNDI1LDAuOTA1LDQuODQxLDEuNDgyLDcuMjQxSDE1NkMxNTAuNDg2LDI2MywxNDYsMjU4LjUxNCwxNDYsMjUzeiBNMjA3LjcyLDI4MyAgYzQuMTI4LDExLjYzOSwxNS4yNDMsMjAsMjguMjgsMjBoMjBjMTYuNTc1LDAsMzAtMTMuNDI0LDMwLTMwYzAtMTYuNTQyLTEzLjQ1OC0zMC0zMC0zMGgtMjBjLTEzLjMyNywwLTI0LjI3OCw4LjYwOC0yOC4yOTcsMjAgIEgxNzguNTRjLTUuMDA2LTE2LjY1My0xMC43MzQtNjUuNjUzLTEyLTk3LjA1M2wxMy40NTktMTcuOTQ2YzEyLjM2MS0xNi40NzYsMzEuNTkyLTI2LjcxMyw1Mi4wNDktMjcuODg4ICBjMjYuOTE3LDI1LjYxNiw2MS43MzksNDIuNTMyLDk4LjUzNyw0Ny43ODZsMTQuNzIyLDIuMTA0Yy0wLjk4NCwyMC44ODUtMi45OTUsNDEuODQzLTUuODc2LDYxLjExOCAgYy0wLjAwMSwwLjAwNi0wLjAwMiwwLjAxMy0wLjAwMywwLjAyYy0wLjkxNiw2LjE5Ny0xLjYzOCwxMC4xODUtMy40ODIsMjEuMzI0Yy01LjI5NiwzMS43NjUtMjguOTk4LDYwLjQ5LTYwLjI4Nyw2OC4zMTMgIGMtMTIuODc3LDMuMjE1LTI2LjQ0MywzLjIxNC0zOS4zMTMsMGMtMTkuNTM3LTQuODg0LTM3LjQ1MS0xOC40MDItNDkuMDEyLTM3Ljc3OEgyMDcuNzJ6IE0yMjYsMjczYzAtNS41MjEsNC40NzgtMTAsMTAtMTBoMjAgIGM1LjUxNCwwLDEwLDQuNDg2LDEwLDEwYzAsNS41MjItNC40NzksMTAtMTAsMTBoLTIwQzIzMC40ODYsMjgzLDIyNiwyNzguNTE0LDIyNiwyNzN6IE0xMjcuNzAyLDM4Mi42MzdsNDIuMDk0LTE0LjAyOCAgYzcuNzEyLDIxLjMyNSwxNy4yNjYsNDIuMDUyLDI4LjQ2Myw2MS43NGMwLjAxOSwwLjAzNCwwLjAzNywwLjA2OCwwLjA1NiwwLjEwMWMwLDAuMDAxLDAuMDAxLDAuMDAxLDAuMDAxLDAuMDAyICBjOC4xODEsMTQuMzg5LDE3LjM4OSwyOC40NSwyNy4zNzIsNDEuNzk5TDIzNy45OSw0OTJINDYuNEM1MC4zNjMsNDQyLjQ2MSw4My4zMzIsMzk3LjQzMywxMjcuNzAyLDM4Mi42Mzd6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iIiBzdHlsZT0iZmlsbDojMDAwMDAwIj48L3BhdGg+PHBhdGggZD0iTTM5NS4wNDIsNDMzLjAxNmM5LjQ1NCw3LjI3MywxNy4yNzIsMTYuNzY2LDIyLjYxMSwyNy40NTNjMi40NzMsNC45NDksOC40ODMsNi45NDEsMTMuNDE1LDQuNDc3ICBjNC45NC0yLjQ2OCw2Ljk0NS04LjQ3NCw0LjQ3OC0xMy40MTVjLTYuNjgzLTEzLjM3Ny0xNi40NzItMjUuMjYxLTI4LjMwOS0zNC4zNjdjLTQuMzc4LTMuMzY5LTEwLjY1Ni0yLjU1LTE0LjAyMywxLjgyOCAgQzM4OS44NDYsNDIzLjM3LDM5MC42NjUsNDI5LjY0OCwzOTUuMDQyLDQzMy4wMTZ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iIiBzdHlsZT0iZmlsbDojMDAwMDAwIj48L3BhdGg+PC9nPiA8L3N2Zz4=" 
                    title="پشتیبانی قوی" />
        <AdItem ImgURL="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTEyLjAwMSA1MTIuMDAxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDAxIDUxMi4wMDE7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PHBhdGggc3R5bGU9ImZpbGw6IzEyMTI5RSIgZD0iTTQ4MS41MywzNDcuMDMzbDMwLjAxNS0xOTEuNjQ5YzMuMTIxLTE5LjQ0OC0xMC4xMTItMzcuNzQ3LTI5LjU2MS00MC44NzdsMCwwTDc2Ljk3Myw0OS41MDEgIEM1Ny41MjUsNDYuMzgsMzkuMjI3LDU5LjYxMywzNi4xMDYsNzkuMDYxbC0xNC4zOTIsODkuNjI3djE3Ny4yM0w0ODEuNTMsMzQ3LjAzM3oiIGRhdGEtb3JpZ2luYWw9IiMxNDZBQTgiIGNsYXNzPSIiIGRhdGEtb2xkX2NvbG9yPSIjMTQ2QUE4Ij48L3BhdGg+PHBhdGggc3R5bGU9ImZpbGw6IzMyMzJGMiIgZD0iTTQ4MS45ODUsMTE0LjUwN0wzNjYuOTUzLDk2LjA0OUMyODkuNjk0LDIxNC4yNjQsMTY0Ljc5OSwyOTYuMTQyLDY5LjAxOSwzNDYuMDM0bDQxMi41MTEsMC45OTkgIGwzMC4wMTUtMTkxLjY0OUM1MTQuNjY2LDEzNS45MzUsNTAxLjQzMywxMTcuNjM3LDQ4MS45ODUsMTE0LjUwN0w0ODEuOTg1LDExNC41MDd6IiBkYXRhLW9yaWdpbmFsPSIjMTI2MDk5IiBjbGFzcz0iIiBkYXRhLW9sZF9jb2xvcj0iIzEyNjA5OSI+PC9wYXRoPjxwYXRoIHN0eWxlPSJmaWxsOiM0OTQ5RTciIGQ9Ik0zNS42NjksMTU5Ljc3MWg0MTAuMTkyYzE5LjY5OCwwLDM1LjY2OSwxNS45NzEsMzUuNjY5LDM1LjY2OXYyMzEuODQ4ICBjMCwxOS42OTgtMTUuOTcxLDM1LjY2OS0zNS42NjksMzUuNjY5SDM1LjY2OUMxNS45NzEsNDYyLjk1NiwwLDQ0Ni45ODYsMCw0MjcuMjg4VjE5NS40NEMwLDE3NS43NDIsMTUuOTcxLDE1OS43NzEsMzUuNjY5LDE1OS43NzF6ICAiIGRhdGEtb3JpZ2luYWw9IiM0Mzk4RDEiIGNsYXNzPSIiIGRhdGEtb2xkX2NvbG9yPSIjNDM5OEQxIj48L3BhdGg+PHBhdGggc3R5bGU9ImZpbGw6Izc4NzhGRiIgZD0iTTQ0NS44NjEsMTU5Ljc3MWgtNy4xMzRjLTg0LjE3OSwxNDkuNDQ0LTI0MS40NjksMjUxLjk1Ni0zMzcuNDksMzAzLjE4NWgzNDQuNjI0ICBjMTkuNjk4LDAsMzUuNjY5LTE1Ljk3MSwzNS42NjktMzUuNjY5VjE5NS40NEM0ODEuNTMsMTc1Ljc0Miw0NjUuNTU5LDE1OS43NzEsNDQ1Ljg2MSwxNTkuNzcxeiIgZGF0YS1vcmlnaW5hbD0iIzNFOENDNyIgY2xhc3M9IiIgZGF0YS1vbGRfY29sb3I9IiMzRThDQzciPjwvcGF0aD48cmVjdCB4PSI0NC41ODYiIHk9IjIwNC4zNTciIHN0eWxlPSJmaWxsOiNGREI2MkY7IiB3aWR0aD0iODkuMTcyIiBoZWlnaHQ9IjcxLjMzOCIgZGF0YS1vcmlnaW5hbD0iI0ZEQjYyRiIgY2xhc3M9IiI+PC9yZWN0PjxnPgoJPHJlY3QgeD0iNDQuNTg2IiB5PSIyMzEuMTA5IiBzdHlsZT0iZmlsbDojRkQ3QjJGOyIgd2lkdGg9IjI2Ljc1MiIgaGVpZ2h0PSIxNy44MzQiIGRhdGEtb3JpZ2luYWw9IiNGRDdCMkYiPjwvcmVjdD4KCTxyZWN0IHg9IjEwNy4wMDciIHk9IjIzMS4xMDkiIHN0eWxlPSJmaWxsOiNGRDdCMkY7IiB3aWR0aD0iMjYuNzUyIiBoZWlnaHQ9IjE3LjgzNCIgZGF0YS1vcmlnaW5hbD0iI0ZEN0IyRiI+PC9yZWN0Pgo8L2c+PGNpcmNsZSBzdHlsZT0iZmlsbDojRkRCNjJGOyIgY3g9IjM5Mi4zNTgiIGN5PSIzNzMuNzg0IiByPSI0NC41ODYiIGRhdGEtb3JpZ2luYWw9IiNGREI2MkYiIGNsYXNzPSIiPjwvY2lyY2xlPjxjaXJjbGUgc3R5bGU9ImZpbGw6I0M3RUJGRiIgY3g9IjMzOC44NTQiIGN5PSIzNzMuNzg0IiByPSI0NC41ODYiIGRhdGEtb3JpZ2luYWw9IiNERTRDM0MiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiNERTRDM0MiPjwvY2lyY2xlPjxnPgoJPHJlY3QgeD0iMzUuNjY5IiB5PSIzMzguMTE1IiBzdHlsZT0iZmlsbDojODdDRUQ5IiB3aWR0aD0iNTMuNTAzIiBoZWlnaHQ9IjE3LjgzNCIgZGF0YS1vcmlnaW5hbD0iIzg3Q0VEOSIgY2xhc3M9IiI+PC9yZWN0PgoJPHJlY3QgeD0iMTI0Ljg0MSIgeT0iMzM4LjExNSIgc3R5bGU9ImZpbGw6Izg3Q0VEOSIgd2lkdGg9IjUzLjUwMyIgaGVpZ2h0PSIxNy44MzQiIGRhdGEtb3JpZ2luYWw9IiM4N0NFRDkiIGNsYXNzPSIiPjwvcmVjdD4KCTxyZWN0IHg9IjIxNC4wMTMiIHk9IjMzOC4xMTUiIHN0eWxlPSJmaWxsOiM4N0NFRDkiIHdpZHRoPSI1My41MDMiIGhlaWdodD0iMTcuODM0IiBkYXRhLW9yaWdpbmFsPSIjODdDRUQ5IiBjbGFzcz0iIj48L3JlY3Q+Cgk8cmVjdCB4PSIzNS42NjkiIHk9IjM5MS42MTkiIHN0eWxlPSJmaWxsOiM4N0NFRDkiIHdpZHRoPSIyMzEuODQ4IiBoZWlnaHQ9IjE3LjgzNCIgZGF0YS1vcmlnaW5hbD0iIzg3Q0VEOSIgY2xhc3M9IiI+PC9yZWN0PgoJPHJlY3QgeD0iMzEyLjEwMyIgeT0iMjA0LjM1NyIgc3R5bGU9ImZpbGw6Izg3Q0VEOSIgd2lkdGg9IjE3LjgzNCIgaGVpZ2h0PSIzNS42NjkiIGRhdGEtb3JpZ2luYWw9IiM4N0NFRDkiIGNsYXNzPSIiPjwvcmVjdD4KCTxyZWN0IHg9IjM0Ny43NzIiIHk9IjIwNC4zNTciIHN0eWxlPSJmaWxsOiM4N0NFRDkiIHdpZHRoPSIxNy44MzQiIGhlaWdodD0iMzUuNjY5IiBkYXRhLW9yaWdpbmFsPSIjODdDRUQ5IiBjbGFzcz0iIj48L3JlY3Q+Cgk8cmVjdCB4PSIzODMuNDQiIHk9IjIwNC4zNTciIHN0eWxlPSJmaWxsOiM4N0NFRDkiIHdpZHRoPSIxNy44MzQiIGhlaWdodD0iMzUuNjY5IiBkYXRhLW9yaWdpbmFsPSIjODdDRUQ5IiBjbGFzcz0iIj48L3JlY3Q+Cgk8cmVjdCB4PSI0MTkuMTA5IiB5PSIyMDQuMzU3IiBzdHlsZT0iZmlsbDojODdDRUQ5IiB3aWR0aD0iMTcuODM0IiBoZWlnaHQ9IjM1LjY2OSIgZGF0YS1vcmlnaW5hbD0iIzg3Q0VEOSIgY2xhc3M9IiI+PC9yZWN0Pgo8L2c+PC9nPiA8L3N2Zz4=" 
                    title="پرداخت امن" />
        <AdItem ImgURL="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxwb2x5bGluZSBzdHlsZT0iZmlsbDojRkZCNUI1IiBwb2ludHM9IjQ1OS45MzIsMzk0Ljg0NyA1MTIsMzk0Ljg0NyA1MTIsMjk5LjM5IDQzMy44OTgsMTc3Ljg5OCAzMzguNDQxLDE3Ny44OTggMzM4LjQ0MSwzOTQuODQ3ICAgIDM3My4xNTMsMzk0Ljg0NyAgIiBkYXRhLW9yaWdpbmFsPSIjRkRCNjJGIiBjbGFzcz0iIiBkYXRhLW9sZF9jb2xvcj0iI0ZEQjYyRiI+PC9wb2x5bGluZT4KCTxwb2x5bGluZSBzdHlsZT0iZmlsbDojRkZCNUI1IiBwb2ludHM9Ijc4LjEwMiwzOTQuODQ3IDguNjc4LDM5NC44NDcgOC42NzgsMTE3LjE1MyAzMzguNDQxLDExNy4xNTMgMzM4LjQ0MSwzOTQuODQ3ICAgIDE2NC44ODEsMzk0Ljg0NyAgIiBkYXRhLW9yaWdpbmFsPSIjRkRCNjJGIiBjbGFzcz0iIiBkYXRhLW9sZF9jb2xvcj0iI0ZEQjYyRiI+PC9wb2x5bGluZT4KPC9nPjxnPgoJPHJlY3QgeD0iOC42NzgiIHk9IjM1MS40NTgiIHN0eWxlPSJmaWxsOiNGNDZCMjc7IiB3aWR0aD0iNTIuMDY4IiBoZWlnaHQ9IjE3LjM1NiIgZGF0YS1vcmlnaW5hbD0iI0Y0NkIyNyIgY2xhc3M9IiI+PC9yZWN0PgoJPHJlY3QgeD0iMTgyLjIzNyIgeT0iMzUxLjQ1OCIgc3R5bGU9ImZpbGw6I0Y0NkIyNzsiIHdpZHRoPSIxNTYuMjAzIiBoZWlnaHQ9IjE3LjM1NiIgZGF0YS1vcmlnaW5hbD0iI0Y0NkIyNyIgY2xhc3M9IiI+PC9yZWN0Pgo8L2c+PHJlY3QgeD0iNDc3LjI4OCIgeT0iMzUxLjQ1OCIgc3R5bGU9ImZpbGw6I0VDRUNFQyIgd2lkdGg9IjM0LjcxMiIgaGVpZ2h0PSIxNy4zNTYiIGRhdGEtb3JpZ2luYWw9IiNEQkRCREIiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiNEQkRCREIiPjwvcmVjdD48cmVjdCB4PSIzNC43MTIiIHk9IjE0My4xODYiIHN0eWxlPSJmaWxsOiNGNDZCMjc7IiB3aWR0aD0iMzAzLjcyOSIgaGVpZ2h0PSIxNy4zNTYiIGRhdGEtb3JpZ2luYWw9IiNGNDZCMjciIGNsYXNzPSIiPjwvcmVjdD48Zz4KCTxjaXJjbGUgc3R5bGU9ImZpbGw6Izg2ODZGRiIgY3g9IjEyMS40OTIiIGN5PSIzOTQuODQ3IiByPSI0My4zOSIgZGF0YS1vcmlnaW5hbD0iIzEyNjA5OSIgY2xhc3M9IiIgZGF0YS1vbGRfY29sb3I9IiMxMjYwOTkiPjwvY2lyY2xlPgoJPGNpcmNsZSBzdHlsZT0iZmlsbDojODY4NkZGIiBjeD0iNDE2LjU0MiIgY3k9IjM5NC44NDciIHI9IjQzLjM5IiBkYXRhLW9yaWdpbmFsPSIjMTI2MDk5IiBjbGFzcz0iIiBkYXRhLW9sZF9jb2xvcj0iIzEyNjA5OSI+PC9jaXJjbGU+CjwvZz48Zz4KCTxyZWN0IHg9IjExMi44MTQiIHk9IjM4Ni4xNjkiIHN0eWxlPSJmaWxsOiNFQ0VDRUMiIHdpZHRoPSIxNy4zNTYiIGhlaWdodD0iMTcuMzU2IiBkYXRhLW9yaWdpbmFsPSIjREJEQkRCIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjREJEQkRCIj48L3JlY3Q+Cgk8cmVjdCB4PSI0MDcuODY0IiB5PSIzODYuMTY5IiBzdHlsZT0iZmlsbDojRUNFQ0VDIiB3aWR0aD0iMTcuMzU2IiBoZWlnaHQ9IjE3LjM1NiIgZGF0YS1vcmlnaW5hbD0iI0RCREJEQiIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iI0RCREJEQiI+PC9yZWN0PgoJPHJlY3QgeD0iMzQuNzEyIiB5PSI3My43NjMiIHN0eWxlPSJmaWxsOiNFQ0VDRUMiIHdpZHRoPSIxMjEuNDkyIiBoZWlnaHQ9IjE3LjM1NiIgZGF0YS1vcmlnaW5hbD0iI0RCREJEQiIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iI0RCREJEQiI+PC9yZWN0PgoJPHJlY3QgeT0iNzMuNzYzIiBzdHlsZT0iZmlsbDojRUNFQ0VDIiB3aWR0aD0iMTcuMzU2IiBoZWlnaHQ9IjE3LjM1NiIgZGF0YS1vcmlnaW5hbD0iI0RCREJEQiIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iI0RCREJEQiI+PC9yZWN0Pgo8L2c+PHBvbHlnb24gc3R5bGU9ImZpbGw6Izg3Q0VEOTsiIHBvaW50cz0iNDU2LjIwMSwyMTIuNjEgMzczLjE1MywyMTIuNjEgMzczLjE1MywyOTAuNzEyIDUwNi40NDYsMjkwLjcxMiAiIGRhdGEtb3JpZ2luYWw9IiM4N0NFRDkiIGNsYXNzPSIiPjwvcG9seWdvbj48cmVjdCB4PSIzMzguNDQxIiB5PSIxNzcuODk4IiBzdHlsZT0iZmlsbDojOUJEQkZGIiB3aWR0aD0iMTcuMzU2IiBoZWlnaHQ9IjIxNi45NDkiIGRhdGEtb3JpZ2luYWw9IiNGRkE4M0QiIGNsYXNzPSIiIGRhdGEtb2xkX2NvbG9yPSIjRkZBODNEIj48L3JlY3Q+PHBhdGggc3R5bGU9ImZpbGw6IzZDQkJDNyIgZD0iTTUwNi40NDYsMjkwLjcxMmwtNDcuMTIxLTczLjMyOWMtMjMuMTYxLDI3LjQ4My01Mi43NjIsNDguNzk2LTg2LjE3Miw2Mi4wNDd2MTEuMjgxSDUwNi40NDZ6IiBkYXRhLW9yaWdpbmFsPSIjNkNCQkM3IiBjbGFzcz0iIj48L3BhdGg+PC9nPiA8L3N2Zz4=" 
                    title="ارسال سریع" />
      </div>
    )
  }
}