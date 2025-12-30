from http.server import BaseHTTPRequestHandler
import json
import urllib.request
import urllib.error

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        try:
            url = 'https://api.github.com/users/carved4/repos?sort=updated&per_page=100'
            req = urllib.request.Request(url)
            req.add_header('User-Agent', 'Portfolio-Site')

            with urllib.request.urlopen(req) as response:
                data = response.read()
                repos = json.loads(data)
            filtered_repos = [repo for repo in repos if not repo.get('fork', False)]
            filtered_repos.sort(key=lambda x: x.get('stargazers_count', 0), reverse=True)
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(filtered_repos).encode())

        except urllib.error.HTTPError as e:
            self.send_response(e.code)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            error_response = {'error': f'GitHub API error: {e.code}'}
            self.wfile.write(json.dumps(error_response).encode())

        except Exception as e:
            self.send_response(500)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            error_response = {'error': str(e)}
            self.wfile.write(json.dumps(error_response).encode())
