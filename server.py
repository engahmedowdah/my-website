from http.server import HTTPServer, SimpleHTTPRequestHandler
import ssl

def run(server_class=HTTPServer, handler_class=SimpleHTTPRequestHandler):
    server_address = ('', 8000)
    httpd = server_class(server_address, handler_class)
    print('Starting server on port 8000...')
    print('Visit http://localhost:8000 in your browser')
    httpd.serve_forever()

if __name__ == '__main__':
    run()
