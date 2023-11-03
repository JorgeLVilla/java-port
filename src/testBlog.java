public class Blog {
    private String title;
    private String body;

    public Blog(String title, String body) {
        this.title = title;
        this.body = body;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    @Override
    public String toString() {
        return "Title: " + title + "\nBody:\n" + body;
    }

    public static void main(String[] args) {
        // Create a new blog
        Blog myBlog = new Blog("Sample Blog Title", "This is the body of the blog.");

        // Display the blog information
        System.out.println(myBlog);
    }
}
