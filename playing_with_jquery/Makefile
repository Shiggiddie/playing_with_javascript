env:
	virtualenv env
	env/bin/pip install -r requirements.txt
	brew install rabbitmq

worker:
	rabbitmq-server

run: env
	@echo "Ensure rabbitmq is running in a seperate process using the 'make worker' recipe"
	env/bin/python jquery_promises_demo_flaskapp.py

clean:
	rm -rf env
