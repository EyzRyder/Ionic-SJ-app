interface ErrorProps{ 
  message:string
}

export default function Error(props: ErrorProps)  {
  return (
    <div>{props.message}</div>
  )
}
