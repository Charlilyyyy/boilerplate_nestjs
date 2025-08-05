import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  getHealth(): { status: string; timestamp: string } {
    return this.appService.getHealth();
  }

  @Get()
  root(@Res() res: Response) {
    // Grouped endpoints by section
    const sections = [
      {
        name: 'Health',
        endpoints: [
          {
            method: 'GET',
            path: '/api/health',
            description: 'Health Check',
          },
        ],
      },
      {
        name: 'Users',
        endpoints: [
          {
            method: 'GET',
            path: '/api/users',
            description: 'Get all users',
          },
          {
            method: 'GET',
            path: '/api/users/:id',
            description: 'Get user by ID',
            params: [
              { name: 'id', in: 'path', required: true, type: 'string', example: '1' },
            ],
          },
          {
            method: 'POST',
            path: '/api/users',
            description: 'Create user',
            body: {
              username: 'string',
              email: 'string',
              password: 'string',
              name: 'string (optional)',
              country_code: 'string (optional)',
              phone: 'string (optional)',
              profile_image_url: 'string (optional)',
            },
          },
          {
            method: 'PUT',
            path: '/api/users/:id',
            description: 'Update user',
            params: [
              { name: 'id', in: 'path', required: true, type: 'string', example: '1' },
            ],
            body: {
              username: 'string (optional)',
              email: 'string (optional)',
              password: 'string (optional)',
              name: 'string (optional)',
              country_code: 'string (optional)',
              phone: 'string (optional)',
              profile_image_url: 'string (optional)',
            },
          },
          {
            method: 'DELETE',
            path: '/api/users/:id',
            description: 'Delete user',
            params: [
              { name: 'id', in: 'path', required: true, type: 'string', example: '1' },
            ],
          },
        ],
      },
    ];

    const html = `
      <html>
        <head>
          <title>Boilerplate NestJS Documentation</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 2rem; background: #f8f9fa; }
            h1 { color: #2c3e50; }
            h2 { color: #2980b9; margin-top: 2em; }
            ul { list-style: none; padding: 0; }
            li { margin: 1.5em 0; background: #fff; border-radius: 8px; box-shadow: 0 2px 8px #0001; padding: 1em; }
            a { color: #3498db; text-decoration: none; font-size: 1.1em; }
            a:hover { text-decoration: underline; }
            .desc { color: #888; margin-left: 0.5em; font-size: 0.95em; }
            .method { font-weight: bold; color: #fff; background: #3498db; border-radius: 4px; padding: 2px 8px; margin-right: 8px; font-size: 0.95em; }
            .method.POST { background: #27ae60; }
            .method.PUT { background: #f39c12; }
            .method.DELETE { background: #e74c3c; }
            .params, .body { margin: 0.5em 0 0 2em; font-size: 0.97em; }
            pre { background: #f4f4f4; padding: 0.5em 1em; border-radius: 4px; }
          </style>
        </head>
        <body>
          <h1>Boilerplate NestJS API Documentation</h1>
          ${sections.map(section => `
            <h2>${section.name}</h2>
            <ul>
              ${section.endpoints.map(e => `
                <li>
                  <span class="method ${e.method}">${e.method}</span>
                  <a href="${e.path.replace(':id', '1')}" target="_blank">${e.path}</a>
                  <span class="desc">${e.description}</span>
                  ${e.params ? `<div class="params"><b>Params:</b> ${e.params.map(p => `${p.name} (${p.type}${p.required ? ', required' : ''})`).join(', ')}</div>` : ''}
                  ${e.body ? `<div class="body"><b>Body:</b><pre>${JSON.stringify(e.body, null, 2)}</pre></div>` : ''}
                </li>
              `).join('')}
            </ul>
          `).join('')}
        </body>
      </html>
    `;
    res.type('html').send(html);
  }
} 