import { Typography, Link } from "@mui/material";

interface Props {
  sx: {
    pt: number
  }
}

export const CopyRight = (props: Props) =>{
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      { 'CopyRight © ' }
      <Link color='inherit' href='https://github.com/JuanseMaulini9'> Juanse's Repo</Link>
      {` ${new Date().getFullYear()}` }
    </Typography>
  )
}


