class BookWithReviews {
  constructor(id, title) {
    this.id = id;
    this.title = title;
    this.reviews = [];
  }

  addReview(author, content) {
    this.reviews.push({ author, content });
  };
}

/**
 * Parses passed books and reviews arrays to create an array of BookWithReviews object. Each row from books input array
 * should have a corresponding row in resulting array. For example, for following input data:
 *    books = [ { "id" : 101, "title" : "Some book title" } ]
 *    reviews = [ { "bookId" : 101, "author" : "John", "content" : "Great book!" } ];
 * It should return following result:
 *    result = [ { id: 101, title: "Some book title", reviews : [ { author: "John", content: "Great book!" }] } ];
 *
 * @param books - an array of input books, see 'src/app/dataset/books.json' for sample data.
 * @param reviews - an array of input reviews, see 'src/app/dataset/reviews.json' for sample data.
 * @returns {Array} - an array of BookWithReviews objects
 */
export function parseBooksData(books, reviews) {
  var obj=new BookWithReviews[books.length];
  for(var i=0;i<books.length;i++)
  {
    obj[i].id=books[i].id;
    obj[i].title=books[i].title;
    for(var j=0;j<reviews.length;j++)
    {
      if(reviews.id==books[i].id)
      {
        obj[i].reviews=reviews;
        break;
      }
    }
  }
  return obj;
}

/**
 * Displays data from passed `books` array. For example, if books argument would have following value:
 *    books = [ { id: 101, title: "Some book title", reviews : [ { author: "John", content: "Great book!" }] } ];
 * then, following structure should be created under the parentNode:
 * <ol>
 *    <li>
 *      <span>Some book title</span>
 *      <ul>
 *        <li>Great book! by John</li>
 *      </ul>
 *    </li>
 * </ol>
 * @param parentNode - parent node for all books
 * @param books - an array of BookWithReviews objects.
 */
export function displayBooks(parentNode, books) {
  for(var i=0;i<books.length;i++)
  {
    var id=books[i].id;
    var title=books[i].title;
    var author=books[i].reviews.author;
    var content=books[i].reviews.content;
    var d1=document.createElement("div");
    d1.innerHTML="ID:"+id+"</br>Title:"+title+"</br>Author:"+author+"</br>Content:"+content+"</br>....................";
    parentNode.appendChild(d1);
  }
}
