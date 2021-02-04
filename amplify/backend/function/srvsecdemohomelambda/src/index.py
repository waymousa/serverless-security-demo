import security as sec

def handler(event, context):
  print('received event:')
  print(event)
  #sec.getLogonInfo()
  body = "%s" % sec.getLogonInfo()
  return {
        "statusCode": 200,
        "headers": {
            'Content-Type': 'html/text',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        "body": "hello world"
  }
