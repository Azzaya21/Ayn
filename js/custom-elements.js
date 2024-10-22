class TravelCard extends HTMLElement {
    static get observedAttributes() {
      return ['img', 'title', 'location', 'link', 'price', 'duration'];
    }
    
    constructor() {
      super();
    }
    
    connectedCallback() {
      console.log("Custom element added to page.");
      this.#render(); // Initial render when the element is added
    }
    
    disconnectedCallback() {
      console.log("Custom element removed from page.");
    }
    
    adoptedCallback() {
      console.log("Custom element moved to new page.");
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
      console.log(`Attribute ${name} has changed from ${oldValue} to ${newValue}.`);
      this.#render(); // Re-render when attributes change
    }
    
    #render() {
      const imageUrl = this.getAttribute('img') || '';
      const title = this.getAttribute('title') || 'Default Title';
      const location = this.getAttribute('location') || 'Default Location';
      const link = this.getAttribute('link') || '#';
      const price = this.getAttribute('price') || 'Default Price';
      const duration = this.getAttribute('duration') || 'Default duration';
    
      this.innerHTML = `
        <article>
          <a href="${link}">
            <img src="${imageUrl}" alt="${title}">
            <p>${location}</p>
            <h3>${title}</h3>
            <p>${price}</p>
            <p>${duration}</p>
          </a>
        </article>
      `;
    }
  }
    
  customElements.define('travel-card', TravelCard);
    
  class HighlightCard extends HTMLElement{
      static get observedAttributes(){
          return ['img', 'number', 'text', 'link'];
      }
  
      constructor(){
          super();
      }
  
      connectedCallback(){
          console.log("Highlight card added to page.");
          this.#render(); //initial render
      }
  
      disconnectedCallback(){
          console.log("Highlight card removed from page.");
      }
  
      attributeChangedCallback(name, oldValue, newValue){
          console.log(`Attribute ${name} has changed from ${oldValue} to ${newValue}.`);
          this.#render(); //Re-render when attributes change
      }
  
      #render(){
          const imageUrl = this.getAttribute('img' || 'default image');
          const number = this.getAttribute('number') || '0';
          const text = this.getAttribute('text') || 'Text';
          const link = this.getAttribute('link') | '#'
  
          this.innerHTML = `
              <article>
                  <a href="${link}">
                      <img src="${imageUrl}" alt="img">
                      <h4>${number}</h4>
                      <p>${text}</p>
                  </a>
              </article>    
          `
      }
  }
  
  customElements.define('highlight-card', HighlightCard);
  
  class GuideCard extends HTMLElement {
    static get observedAttributes() {
      return ['img', 'title', 'description', 'link', 'rating'];
    }
  
    constructor() {
      super();
    }
  
    connectedCallback() {
      console.log("Info card added to page.");
      this.#render(); // Initial render
    }
  
    disconnectedCallback() {
      console.log("Info card removed from page.");
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      console.log(`Attribute ${name} has changed from ${oldValue} to ${newValue}.`);
      this.#render(); // Re-render when attributes change
    }
  
    #render() {
      const imageUrl = this.getAttribute('img') || 'https://picsum.photos/100';
      const title = this.getAttribute('title') || 'Default Title';
      const description = this.getAttribute('description') || 'Default Description';
      const link = this.getAttribute('link') || '#';
      const rating = parseInt(this.getAttribute('rating')) || 0; // Get the rating as an integer
  
      // Create the star rating
      const stars = Array.from({ length: 5 }, (_, index) => {
        return index < rating ? '★' : '☆'; // Filled star for rating, empty star otherwise
      }).join('');
  
      this.innerHTML = `
        <article>
          <a href="${link}">
            <img src="${imageUrl}" alt="${title}">
            <h3>${title}</h3>
            <div class="rating">${stars}</div> <!-- 5-star rating -->
            <p>${description}</p>
          </a>
        </article>
      `;
    }
  }
  
  customElements.define('guide-card', GuideCard);
  
  class ReviewComment extends HTMLElement {
    static get observedAttributes() {
      return ['img', 'username', 'travel-type', 'rating', 'comment', 'likes', 'date'];
    }
  
    constructor() {
      super();
    }
  
    connectedCallback() {
      console.log("Review comment added to page.");
      this.#render(); // Initial render
    }
  
    disconnectedCallback() {
      console.log("Review comment removed from page.");
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      console.log(`Attribute ${name} has changed from ${oldValue} to ${newValue}.`);
      this.#render(); // Re-render when attributes change
    }
  
    #render() {
      const imgSrc = this.getAttribute('img') || 'https://via.placeholder.com/100'; // Default profile pic
      const username = this.getAttribute('username') || 'Anonymous';
      const travelType = this.getAttribute('travel-type') || 'General';
      const rating = parseInt(this.getAttribute('rating')) || 0; // Get the rating as an integer
      const comment = this.getAttribute('comment') || 'No comments provided.';
      const likes = this.getAttribute('likes') || '0';
      const date = this.getAttribute('date') || new Date().toLocaleDateString(); // Default to today's date
  
      // Create the star rating
      const stars = Array.from({ length: 5 }, (_, index) => {
        return index < rating ? '★' : '☆'; // Filled star for rating, empty star otherwise
      }).join('');
  
      this.innerHTML = `
        <article>
          <img src="${imgSrc}" alt="Profile pic">
          <h4>${username}</h4>
          <div>${travelType}</div>
          <div class="rating">${stars}</div> <!-- 5-star rating -->
          <p>${comment}</p>
          <div>${likes} Likes</div>
          <p>${date}</p>
        </article>
      `;
    }
  }
  
  customElements.define('review-comment', ReviewComment);
  