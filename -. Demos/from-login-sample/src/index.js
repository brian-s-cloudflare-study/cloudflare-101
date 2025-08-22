/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx) {
		const url = new URL(request.url);
		
		// 정적 파일 서빙 (index.html 및 dashboard.html)
		if (url.pathname === '/' || url.pathname === '') {
			return new Response(await fetch(new URL('/index.html', request.url)));
		}
		
		// 로그인 처리
		if (url.pathname === '/login' && request.method === 'POST') {
			const formData = await request.formData();
			const username = formData.get('username');
			const password = formData.get('password');
			
			// 로그인 검증 (고정 ID/PW 사용)
			if (username === 'cloudflare' && password === 'immerse25') {
				// 로그인 성공: 쿠키 설정 및 대시보드로 리디렉션
				const headers = new Headers();
				headers.append('Set-Cookie', `auth=loggedin; HttpOnly; Path=/; Max-Age=3600`);
				headers.append('Location', '/dashboard');
				
				return new Response(null, {
					status: 302,
					headers
				});
			} else {
				// 로그인 실패: 홈으로 리디렉션 및 오류 메시지 추가
				const headers = new Headers();
				headers.append('Location', '/?error=1');
				
				return new Response(null, {
					status: 302,
					headers
				});
			}
		}
		
		// 대시보드 페이지 (로그인 필요)
		if (url.pathname === '/dashboard') {
			// 쿠키 확인
			const cookie = request.headers.get('Cookie') || '';
			if (cookie.includes('auth=loggedin')) {
				// 로그인 상태: 대시보드 페이지 제공 (정적 파일 사용)
				return new Response(await fetch(new URL('/dashboard.html', request.url)), {
					headers: {
						'Content-Type': 'text/html;charset=UTF-8'
					}
				});
			} else {
				// 비로그인 상태: 홈으로 리디렉션
				return new Response(null, {
					status: 302,
					headers: {
						'Location': '/?unauthorized=1'
					}
				});
			}
		}
		
		// 로그아웃 처리
		if (url.pathname === '/logout') {
			return new Response(null, {
				status: 302,
				headers: {
					'Set-Cookie': 'auth=; HttpOnly; Path=/; Max-Age=0',
					'Location': '/'
				}
			});
		}
		
		// API 엔드포인트 (기존 코드 유지)
		switch (url.pathname) {
			case '/message':
				return new Response('Hello, World!');
			case '/random':
				return new Response(crypto.randomUUID());
		}
		
		// 정적 파일 서빙 시도 (public 폴더 내 파일)
		try {
			return fetch(new URL(url.pathname, request.url));
		} catch (e) {
			return new Response('Not Found', { status: 404 });
		}
	},
};
