import security as sec

def handler(event, context):
  print('received event:')
  print(event)
  sec.getLogonInfo()
  return {
        "statusCode": 200,
        "headers": {'Content-Type': 'text/html'},
        "body": "hello world"
  }
