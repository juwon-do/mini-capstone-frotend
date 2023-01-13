export function ProductNew() {
  return (
    <div id="products-new">
      <h1>New Product</h1>
      <div class="mb-3">
        <label for="postTitle" class="form-label">Title</label>
        <input type="text" class="form-control" id="postTitle" placeholder="Title"/>
      </div>
      <div class="mb-3">
        <label for="postBody" class="form-label">Body</label>
        <textarea class="form-control" id="postBody" rows="3"></textarea>
      </div>
      <div class="mb-3">
        <label for="postImage" class="form-label">Image-URL</label>
        <input type="text" class="form-control" id="postImage" placeholder="www.google.com"/>
      </div>
    </div>
  );
}
