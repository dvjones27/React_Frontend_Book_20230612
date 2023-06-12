import Button from "./Button"
import Input from "./Input"
import Select from "react-select"

import { useForm } from 'react-hook-form'
import { server_calls } from '../api/server'
import { useDispatch, useStore } from 'react-redux';
import { chooseTitle, chooseAuthor, chooseISBN, chooseCover, chooseCopyright, chooseLength, chooseDescription } from "../redux/slices/RootSlice";

// interfaces

interface BookInfoProps {
  id?: string[]
}

const BookInfo = (props:BookInfoProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();
  
  const cover = [
    {value: "hardback", label: "Hardback"},
    {value: "paperback", label: "Paperback"},
    {value: "digital", label:  "Digital"},
    {value: "audio", label: "Audio"}
  ]
  

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.isbn } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 100000);
      event.target.reset()
    } else {
      // Use dispatch to update our state in our store
      dispatch(chooseISBN(data.isbn));
      dispatch(chooseTitle(data.title));
      dispatch(chooseAuthor(data.author));
      dispatch(chooseCover(data.cover));
      dispatch(chooseCopyright(data.copyright));
      dispatch(chooseLength(data.pages));
      dispatch(chooseDescription(data.description));

      server_calls.create(store.getState())
      setTimeout( () => {window.location.reload()}, 100000);
    }
    
  }

  return (


    <div>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div>
          <label htmlFor="title">Title</label>
          <Input {...register("title")} type="text" pattern="^[a-zA-Z0-9]+$" name="title" placeholder="Title"/>
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <Input {...register("author")} type="text" pattern="^[a-zA-Z0-9]+$" name="author" placeholder="Author"/>
        </div>
        <div>
          <label htmlFor="isbn">ISBN</label>
          <Input {...register("isbn")} type="text" pattern="^[A-Z0-9]+$" name="isbn" placeholder="ISBN"/>
        </div>
        <div>
          <label htmlFor="cover">Cover</label>
          <Input {...register("cover")} type="text" pattern="^[A-Z0-9]+$" name="cover" placeholder="Cover"/>
        </div>
        <div>
          <label htmlFor="copyright">Copyright</label>
          <Input {...register("copyright")} type="date" pattern="\d{1,2}-d{1,2}-d{4}" name="copyright" placeholder="Copyright"/>
        </div>
        <div>
          <label htmlFor="length">Pages</label>
          <Input {...register("pages")} type="number" pattern="[0-9]*" name="pages" placeholder="Pages"/>
        </div>
        <div>
          <label htmlFor="description">Description</label><br/>
          <textarea {...register("description")} rows={4} cols={40} name="description" placeholder="Description"/>
        </div>
        <div className="flex p-1">
          <Button
            className="flex justify-start m-3 bg-slate-500 p-2 rounded hover:bg-slate-800 text-white"
            >
              Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default BookInfo