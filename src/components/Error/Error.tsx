interface ErrorProps{ 
  error: Error;
}

export default function Error(props: ErrorProps) {
  console.log(props.error)

  return (
    <div>{props.error?.message}</div>
  )
}
