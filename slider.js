const starbucksThumb = document.querySelector('.starbucks')
const thumbClick = document.querySelector('.thumb')

const images = []

let imageDisplay = starbucksThumb

images.push({ title: 'Image 0', src: './images/img1.png' })
images.push({ title: 'Image 1', src: './images/img2.png' })
images.push({ title: 'Image 2', src: './images/img3.png' })

swapImage = () => {
  document.images[thumbClick].src = images[imageDisplay].src
  imageDisplay++
  if (imageDisplay > images.length - 1) {
    imageDisplay = starbucksThumb
  }
}

// finally settled for embedded scripting for the imageSwap after external scripting could'nt fly!
