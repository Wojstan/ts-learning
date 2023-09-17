import express from 'express'
import bodyParser from 'body-parser'
import { defaultCars } from './data/cars'

const app = express()
const cars = defaultCars

app.use(bodyParser.json())

// Get a list of all cars
app.get('/cars', (_req, res) => {
  res.json(cars)
})

// Get a specific car by ID
app.get('/cars/:id', (req, res) => {
  const carId = parseInt(req.params.id)
  const car = cars.find(({ id }) => id === carId)

  if (!car) {
    res.status(404).json({ message: 'Car not found' })
  } else {
    res.json(car)
  }
})

// Create a new car
app.post('/cars', (req, res) => {
  const { make, model, year } = req.body
  const newCar = { id: cars.length + 1, make, model, year }
  cars.push(newCar)
  res.status(201).json(newCar)
})

// Update a car by ID
app.put('/cars/:id', (req, res) => {
  const carId = parseInt(req.params.id);
  const carIndex = cars.findIndex(({ id }) => id === carId);

  if (carIndex === -1) {
    return res.status(404).json({ message: 'Car not found' });
  }

  const updatedCar = { ...cars[carIndex], ...req.body };
  cars[carIndex] = updatedCar;

  res.json(updatedCar);
});

// Delete a car by ID
app.delete('/cars/:id', (req, res) => {
  const carId = parseInt(req.params.id)
  const carIndex = cars.findIndex(({ id }) => id === carId)

  if (carIndex === -1) {
    return res.status(404).json({ message: 'Car not found' })
  }

  const deletedCar = cars.splice(carIndex, 1)
  res.json(deletedCar[0])
})

const port = 4422
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
