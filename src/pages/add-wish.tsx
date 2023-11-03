import { trpc } from '@/utils/trpc'
import { Button, Container } from '@mui/material'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useCallback, useState } from 'react'

export default function AddWishForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [link, setLink] = useState('')

  const { mutateAsync: createMutateAsync } = trpc.addAWish.useMutation()

  const onCreate = useCallback(async () => {
    try {
      const payload = {
        title: title,
        description: description,
        link: link,
      }
      const result = await createMutateAsync(payload)
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }, [createMutateAsync, title, description])

  return (
    <Container>
      <Typography variant="h6" gutterBottom>
        Add a wish to wishlist
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="title"
            name="title"
            label="Title"
            fullWidth
            variant="standard"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="link"
            name="link"
            label="Link to the present"
            fullWidth
            variant="standard"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="description"
            name="description"
            label="Description / annotations"
            fullWidth
            variant="standard"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" variant="contained" onClick={onCreate}>
            Add a wish
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}
