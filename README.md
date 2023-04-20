# CH4_FSW-1_Rafif-Aditya-Nugroho


## ERD Cars
![Rafif Aditya N ERD](https://user-images.githubusercontent.com/110434742/233289495-088ed487-832b-4b1b-af13-88bb88dbb172.png)



## API DOCUMENTATION 


1. Endpoint: GET /cars
    
    Link : [http://localhost:8000/cars](http://localhost:8000/cars)
    
    Deskripsi: Mendapatkan semua data mobil yang ada dalam database.
    
    Contoh Request Body: Tidak ada.
    
    Contoh Response Body:
    
    ```
    
    [ 
       
    {
    
    "id":1,
    "name":"Xenia",
    "price":250000,
    "size":"Small",
    "image":"http://res.cloudinary.com/dlf3pvbmi/image/upload/v1681927253/vy6vhtxjzwp0owsmsido.png",
    "createdAt":"2023-04-19T18:00:53.447Z",
    "updatedAt":"2023-04-19T18:47:29.517Z"
    
    },
    
    {
    
    "id":2,
    "name":"Daihatsu",
    "price":250000,
    "size":"Small",
    "image":"http://res.cloudinary.com/dlf3pvbmi/image/upload/v1681927253/vy6vhtxjzwp0owsmsido.png",
    "createdAt":"2023-04-19T18:00:53.447Z",
    "updatedAt":"2023-04-19T18:47:29.517Z"
    
    },
    
    {
    
    "id":3,
    "name":"Avanza",
    "price":250000,
    "size":"Small",
    "image":"http://res.cloudinary.com/dlf3pvbmi/image/upload/v1681927253/vy6vhtxjzwp0owsmsido.png",
    "createdAt":"2023-04-19T18:00:53.447Z",
    "updatedAt":"2023-04-19T18:47:29.517Z"
    
    }
    
    ]
    
    ```
    
2. Endpoint: GET /cars/{id}
    
    Link: [http://localhost:8000/cars/:id](http://localhost:8000/cars/:id)
    
    Deskripsi: Mendapatkan data mobil berdasarkan ID.
    
    Contoh Request Body: Tidak ada.
    
    Contoh Response Body:
    
    ```
    
    {
    
    "id":1,
    "name":"Xenia ",
    "price":250000,
    "size":"Small",
    "image":"http://res.cloudinary.com/dlf3pvbmi/image/upload/v1681927253/vy6vhtxjzwp0owsmsido.png",
    "createdAt":"2023-04-19T18:00:53.447Z",
    "updatedAt":"2023-04-19T18:47:29.517Z"
    
    }
    
    ```
    
3. Endpoint: POST /cars
    
    Link : [http://localhost:8000/cars/create](http://localhost:8000/cars/create)
    
    Deskripsi: Menambahkan data mobil baru ke dalam database.
    
    Contoh Request Body:
    
    ```
    
    {
    
    "name":"Xenia ",
    "price":250000,
    "size":"Small",
    "image":"http://res.cloudinary.com/dlf3pvbmi/image/upload/v1681927253/vy6vhtxjzwp0owsmsido.png",
    
    }
    
    ```
    
    Contoh Response Body:
    
    ```
    
    {
    "id":2,
    "name":"Xenia ",
    "price":250000,
    "size":"Small",
    "image":"http://res.cloudinary.com/dlf3pvbmi/image/upload/v1681927253/vy6vhtxjzwp0owsmsido.png",
    "createdAt":"2023-04-19T18:00:53.447Z",
    "updatedAt":"2023-04-19T18:47:29.517Z"
    }
    
    ```
    
4. Endpoint: PUT /cars/{id}
    
    Link : [http://localhost:8000/cars/:id/update](http://localhost:8000/cars/:id/update)
    
    Deskripsi: Mengubah data mobil yang sudah ada dalam database.
    
    Contoh Request Body:
    
    ```
    
    {
    "name":"Xenia ",
    "price":250000,
    "size":"Small",
    "image":"http://res.cloudinary.com/dlf3pvbmi/image/upload/v1681927253/vy6vhtxjzwp0owsmsido.png",
    }
    
    ```
    
    Contoh Response Body:
    
    ```
    
    {
    "id":1,
    "name":"Xenia ",
    "price":250000,
    "size":"Small",
    "image":"http://res.cloudinary.com/dlf3pvbmi/image/upload/v1681927253/vy6vhtxjzwp0owsmsido.png",
    "createdAt":"2023-04-19T18:00:53.447Z",
    "updatedAt":"2023-04-19T18:47:29.517Z"
    }
    
    ```
    
5. Endpoint: DELETE /cars/{id}
    
    Link : [http://localhost:8000/cars/:id/delete](http://localhost:8000/cars/:id/delete)
    
    Deskripsi: Menghapus data mobil dari database berdasarkan ID.
    
    Contoh Request Body: Tidak ada.
    
    Contoh Response Body:
    
    ```
    
    {
        "message": "Car with ID 1 has been deleted."
    }
    
    ```
