
![Techstore](screenshot.png)

<details>
  <summary>Click to show images</summary>
  ![Image 1](ShowCase/1.png)
  ![Image 2](ShowCase/2.png)
  ![Image 3](ShowCase/3.png)
  ![Image 4](ShowCase/4.png)
  ![Image 5](ShowCase/5.png)
  ![Image 6](ShowCase/6.png)
  ![Image 7](ShowCase/7.png)
  ![Image 8](ShowCase/8.png)
  ![Image 9](ShowCase/9.png)
  ![Image 10](ShowCase/10.png)
  ![Image 11](ShowCase/11.png)
  ![Image 12](ShowCase/12.png)
  ![Image 13](ShowCase/13.png)
  ![Image 14](ShowCase/14.png)
  ![Image 15](ShowCase/15.png)
</details>

## 
# Techstore
This is a fully functional web app for tech products made using React(frontend) and Django(backend).


## Installation


### Prerequisites
- Python (3.x)
- Node.js

### Setting up the Environment

#### Windows
1. Clone the repository:
```shell
git clone https://github.com/thebugged/techstore.git
```

2. Create a virtual environment: 
```shell
python -m venv env
```

3. Activate the virtual environment:
```shell
env\Scripts\activate
```

4. Install the Python dependencies:
```shell
pip install -r requirements.txt
```

5. Install the Node.js dependencies:
```shell
cd frontend
npm install
```
or 
```shell
npm install --force
```


#### macOS/Linux
1. Clone the repository:
```shell
git clone https://github.com/thebugged/techstore.git
```

2. Create a virtual environment: 
```shell
python -m venv env
```

3. Activate the virtual environment:
```shell
source env/bin/activate
```

4. Install the Python dependencies:
```shell
pip install -r requirements.txt
```

5. Install the Node.js dependencies:
```shell
cd frontend
npm install
```
or 
```shell
npm install --force
```



## Running the App
The frontend and backend is not combined as usual, so you would need to run the sevrers seperately.

1. From the backend directory run the Django development server:
```shell
cd backend
python manage.py runserver
```

The app will be accessible at http://127.0.0.1:8000/.

2. From the frontend directory run the React development server:
```shell
cd frontend
npm start
```

The app will be accessible at http://localhost:3000/.
