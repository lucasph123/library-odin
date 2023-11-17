
const libArray = [];
const modal = document.querySelector('.modal-form');
const btnOpen = document.querySelector('.btn-open');
const btnClose = document.querySelector('.btn-close');
const libContent = document.querySelector('.library-content');
const btnSubmit = document.querySelector('#btn-submit');


btnOpen.addEventListener('click', () => modal.showModal());
btnClose.addEventListener('click', () => modal.close());

btnSubmit.addEventListener('click', function addBookToLibrary()
{
    const subTitle = document.querySelector('#title').value;
    const subDesc = document.querySelector('#description').value;
    const subAuthor = document.querySelector('#author').value;
    const subPages = document.querySelector('#pages').value;
    if(subTitle !== ''&& subAuthor !== '' && subPages !== '')
    {   
    const myLibrary = new SaveBookInLibrary(subTitle,subDesc,subAuthor,subPages);
    createVisualBook(subTitle,subDesc,subAuthor,subPages);
    libArray.push(myLibrary);
    }
    
      
 
});

function SaveBookInLibrary(subTitle,subDesc,subAuthor,subPages)
{

    this.title = subTitle;
    this.desc = subDesc;
    this.author = subAuthor
    this.pages = subPages;

}


function createVisualBook(subTitle,subDesc,subAuthor,subPages)
{
    

    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const descDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const pagesDiv = document.createElement('div');
    const btnDel = document.createElement('button');
    const slider =document.createElement('label');
    const readSlider =document.createElement('input');
    const readSliderCircle = document.createElement('span');
    btnDel.addEventListener('click', () => deleteBook(titleDiv.textContent, bookDiv));


    bookDiv.classList.add('book');
    titleDiv.classList.add('title');
    descDiv.classList.add('description');
    authorDiv.classList.add('author');
    pagesDiv.classList.add('pages');
    btnDel.classList.add('btn-del');
    slider.classList.add('btn-slider');
    readSlider.classList.add('btn-read');
    readSlider.type=  'checkbox';
    readSliderCircle.classList.add('btn-read-circle');

    titleDiv.textContent= subTitle;
    descDiv.textContent= subDesc;
    authorDiv.textContent= subAuthor;
    pagesDiv.textContent= 'Pages:' + subPages;
    btnDel.textContent = 'X';

    libContent.appendChild(bookDiv);
    bookDiv.appendChild(titleDiv);
    bookDiv.appendChild(descDiv);
    bookDiv.appendChild(authorDiv);
    bookDiv.appendChild(pagesDiv);
    bookDiv.appendChild(btnDel);
    bookDiv.appendChild(slider)
    slider.appendChild(readSlider);
    slider.appendChild(readSliderCircle)

}

function deleteBook(titleDiv,book)
{

    const find = libArray.findIndex((x) => x.title === titleDiv)
     if (find!== -1) libArray.splice(find,1);
    libContent.removeChild(book);

}
