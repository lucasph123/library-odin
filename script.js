
const myLibrary = new Object();

const modal = document.querySelector('.modal-form');
const btnOpen = document.querySelector('.btn-open');
const btnClose = document.querySelector('.btn-close');
const libContent = document.querySelector('.library-content');



btnClose.addEventListener('click', () => modal.close());
btnOpen.addEventListener('click', function addBookToLibrary()
{
    modal.showModal();

});




function displayLibrary()
{
    for (const key in myLibrary) {
        console.log(myLibrary.book)

    }
}

function createVisualBook(title)
{
    

    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const descDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const pagesDiv = document.createElement('div');

    bookDiv.classList.add('book');
    titleDiv.classList.add('title');
    descDiv.classList.add('description');
    authorDiv.classList.add('author')
    pagesDiv.classList.add('pages')

    titleDiv.textContent= title;
    descDiv.textContent='Description';
    authorDiv.textContent='title';
    pagesDiv.textContent='title';

    libContent.appendChild(bookDiv);
    bookDiv.appendChild(titleDiv);
    bookDiv.appendChild(descDiv);
    bookDiv.appendChild(authorDiv);
    bookDiv.appendChild(pagesDiv);

}


function showBookForm()
{

}