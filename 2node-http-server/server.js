/**
 * Created by wzwang on 2016/8/25.
 */
var http = require('http');//����require��Node.js�Դ���httpģ�飬���Ұ�����ֵ��http����
//���ǵ���httpģ���ṩ�ĺ�����createServer.��������᷵��һ���������������һ������listen�ķ��������������һ������ֵ��ָ�����http�����������Ķ˿ں�
http.createServer(function(request, response) {
    //����HTTPͷ��
    //HTTP ״ֵ̬�� 200��ok
    //�������ͣ�text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    //������Ӧ����"Hello World"
    response.end("Hello World!");
}).listen(8888);

//�ն˴�ӡ������Ϣ��
console.log('Server running at http://10.32.247.164:8888'); //����ip��ַ
