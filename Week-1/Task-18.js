// Create an object called book
let book = {
    title: "Merchant of Venice",
    author: "William Shakespeare",
    pages: 200,

    // Method to display book information
    displayInfo: function() {
        console.log("Title: " + this.title + ", Author: " + this.author + ", Pages: " + this.pages);
    }
};

// Call the displayInfo method
book.displayInfo();
