//get dom elements
const input = document.querySelector("input")
const searchBtn = document.querySelector("#search-btn")
const newsList = document.querySelector("#news-list")
const mainHeaderText = document.querySelector(".main-header-text")
const spinner = document.querySelector(".spinner-border")

//import components
import Card from "./components/Card.js";


const API = (topic) => `https://newsapi.org/v2/everything?q=${topic}&apiKey=53cee031e78d4336b49bd31dd7a76ebf`;


class NewsManager {
    constructor(input, searchBtn, list, listText, spinner) {
        this.input = input;
        this.searchBtn = searchBtn;
        this.list = list;
        this.errorText = listText;
        this.spinner = spinner;
        this.render()
    }
    render = () => {
        this.getNewsEvent(this.searchBtn, this.input)
    }
    //send request to api and get datas
    getNews = async (topic) => {
        this.errorText.innerText = ""
        this.showSpinner()
        try {
            const res = await fetch(API(topic))
            const obj = await res.json();
            this.hideSpinner()
            if (obj.totalResults == 0) this.findError()
            else {
                this.getResult(obj.totalResults)
                this.createCard(obj.articles)
            }
        } catch (error) {
            this.hideSpinner()
            this.callApiError()
        }
    }
    getNewsEvent = (elem, input) => {
        elem.addEventListener("click", () => {
            this.getNews(input.value)
            input.select()

        })
    }
    createCard = (arr) => {
        this.list.innerHTML = "";
        arr.forEach(article => {
            const date = article.publishedAt.slice(0, 10).split("-")
            let [year, month, day] = date;
            (month[0] == 0) ? month = month[1]: null;
            if (day[0] == 0) day = day[1];
            this.list.innerHTML += Card(article.urlToImage, article.title, article.description, farvardin.gregorianToSolar(Number(year), Number(month), Number(day), "string"))
        })
    }
    //if nothing find show this error
    findError = () => {
        this.list.innerHTML = ""
        this.errorText.innerText = "results: 0 please search something else";
    }
    //show the total results number 
    getResult = (results) => {
        this.errorText.innerText = `results: ${results} `;
    }
    //if request status is false show this error
    callApiError = () => {
        this.list.innerHTML = ""
        this.errorText.innerText = "there is something wrong please try again"
    }
    showSpinner = () => {
        this.spinner.classList.remove('d-none')
    }
    hideSpinner = () => {
        this.spinner.classList.add('d-none')
    }

}


const customNewsManager = new NewsManager(input, searchBtn, newsList, mainHeaderText, spinner);