export default {
  name: 'painting',
  title: 'Paintings',
  type: 'document',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'year', title: 'Year', type: 'string'},
    {name: 'material', title: 'Material', type: 'string'},
    {name: 'genre', title: 'Genre', type: 'string'},
    {name: 'image', title: 'Image', type: 'image', options: {hotspot: true}},
    {name: 'size', title: 'Size', type: 'string'},
    {name: 'artist', title: 'Artist', type: 'reference', to: [{type: 'artist'}]},
  ],
};