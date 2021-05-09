import {loadHeadline} from "./headline"
import {loadTabs} from "./tabs"

function loadPage(){
    //0. get where to puts elements in the dom
    let  page_board = document.querySelector("#content");

    //1. load headline
    loadHeadline(page_board)

    //2. load tabs
    loadTabs(page_board)
}
export {loadPage}